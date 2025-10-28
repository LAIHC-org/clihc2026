<script>
import TheHeader from '@/components/Header.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
  },
  setup() {
    const { locale } = useI18n()
    const gettingStarted = shallowRef(null)

    const loadComponents = async (newLocale) => {
      gettingStarted.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Getting-started.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Getting-started.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Getting-started.vue'))
        default:
          return null
      }
    }

    return {
      gettingStarted,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.getting_started_title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">

            <template v-if="gettingStarted">
              <component :is="gettingStarted" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>