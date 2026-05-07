<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

const route = useRoute()
const { t, locale } = useI18n()

const NAV_GROUP_LANDING_ROUTE = {
  'nav.for_authors': 'call-for-papers',
  'nav.for_attendees': 'getting-started',
  'nav.program': 'schedule',
}

const ROUTE_BREADCRUMB_CONFIG = {
  'call-for-participation': { parentKey: 'nav.for_authors', currentKey: 'calls.title' },
  'call-for-papers': { parentKey: 'nav.for_authors', currentKey: 'nav.cfp' },
  'call-for-short-papers': { parentKey: 'nav.for_authors', currentKey: 'nav.csp' },
  'call-for-posters': { parentKey: 'nav.for_authors', currentKey: 'nav.cpt' },
  'call-for-workshops-and-tutorials': { parentKey: 'nav.for_authors', currentKey: 'nav.cwt' },
  'student-design-competition': { parentKey: 'nav.for_authors', currentKey: 'nav.sdc' },
  'graduate-colloquium': { parentKey: 'nav.for_authors', currentKey: 'nav.cgc' },
  'accessibility-recommendations-for-authors': { currentKey: 'accessibility.title' },
  'ethics-recommendations-for-authors': { parentKey: 'nav.for_authors', currentKey: 'ethics.title' },
  organizers: { currentKey: 'nav.organizers' },
  schedule: { parentKey: 'nav.program', currentKey: 'nav.schedule' },
  'program-structure': { parentKey: 'nav.program', currentKey: 'nav.program_structure' },
  'keynote-speakers': { currentKey: 'nav.keynotes' },
  'accepted-papers': { currentKey: 'nav.accepted_papers' },
  'getting-started': { parentKey: 'nav.for_attendees', currentKey: 'nav.getting_started' },
  registration: { parentKey: 'nav.for_attendees', currentKey: 'nav.registration' },
  'accessibility-FAQ': { currentKey: 'nav.accessibility_faqs' },
  videoArchives: { currentKey: 'breadcrumbs.pages.video_archives' },
  'not-found': { currentKey: 'breadcrumbs.pages.not_found' },
}

const getUrlFromMetaTag = (selector) => {
  const tag = document.querySelector(selector)
  const value = tag?.getAttribute('href') || tag?.getAttribute('content')
  if (!value) {
    return null
  }

  try {
    return new URL(value)
  } catch {
    return null
  }
}

const isLocalHost = (host) => host === 'localhost' || host === '127.0.0.1' || host === '::1'

const hostContext = computed(() => {
  const currentUrl = new URL(window.location.href)
  const canonicalUrl = getUrlFromMetaTag('link[rel="canonical"]') || getUrlFromMetaTag('meta[property="og:url"]')
  const targetUrl = isLocalHost(currentUrl.hostname) && canonicalUrl ? canonicalUrl : currentUrl

  const host = targetUrl.hostname
  const venueMatch = host.match(/^(mexico|brazil)\.(.+)$/i)
  const siteKey = venueMatch ? venueMatch[1].toLowerCase() : 'central'
  const centralHost = venueMatch ? venueMatch[2] : host

  return {
    protocol: targetUrl.protocol,
    siteKey,
    centralHost,
  }
})

const breadcrumbs = computed(() => {
  const routeName = typeof route.name === 'string' ? route.name : null
  if (!routeName || routeName === 'home') {
    return []
  }

  const config = ROUTE_BREADCRUMB_CONFIG[routeName]
  if (!config) {
    return []
  }

  const links = []
  const localePath = `/${locale.value}/`
  const centralIsCurrentSite = hostContext.value.siteKey === 'central'

  links.push(
    centralIsCurrentSite
      ? { label: t('breadcrumbs.root'), to: Tr.i18nRoute({ name: 'home' }) }
      : {
          label: t('breadcrumbs.root'),
          href: `${hostContext.value.protocol}//${hostContext.value.centralHost}${localePath}`,
        }
  )

  links.push({
    label: t(`breadcrumbs.site.${hostContext.value.siteKey}`),
    to: Tr.i18nRoute({ name: 'home' }),
  })

  if (config.parentKey) {
    const parentRouteName = NAV_GROUP_LANDING_ROUTE[config.parentKey]
    if (parentRouteName) {
      links.push({
        label: t(config.parentKey),
        to: Tr.i18nRoute({ name: parentRouteName }),
      })
    }
  }

  links.push({ label: t(config.currentKey), isCurrent: true })

  return links
})
</script>

<template>
  <nav v-if="breadcrumbs.length" class="breadcrumbs-nav" :aria-label="$t('breadcrumbs.aria_label')">
    <div class="container">
      <ol class="breadcrumbs-list">
        <li v-for="(crumb, index) in breadcrumbs" :key="`${crumb.label}-${index}`" class="breadcrumbs-item">
          <RouterLink v-if="!crumb.isCurrent && crumb.to" :to="crumb.to" class="breadcrumbs-link">
            {{ crumb.label }}
          </RouterLink>
          <a v-else-if="!crumb.isCurrent && crumb.href" :href="crumb.href" class="breadcrumbs-link">
            {{ crumb.label }}
          </a>
          <span v-else class="breadcrumbs-current" aria-current="page">{{ crumb.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>
.breadcrumbs-nav {
  margin-top: 0.75rem;
}

.breadcrumbs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #6c757d;
  font-size: 0.875rem;
}

.breadcrumbs-item + .breadcrumbs-item::before {
  content: '/';
  margin-right: 0.25rem;
  color: #adb5bd;
}

.breadcrumbs-link {
  color: inherit;
  text-decoration: none;
}

.breadcrumbs-link:hover,
.breadcrumbs-link:focus {
  text-decoration: underline;
}

.breadcrumbs-current {
  color: #495057;
}
</style>
