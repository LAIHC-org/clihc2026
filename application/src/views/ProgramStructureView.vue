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
    const programStructure = shallowRef(null)

    const loadComponents = async (newLocale) => {
      programStructure.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Program-structure.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Program-structure.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Program-structure.vue'))
        default:
          return null
      }
    }

    return {
      programStructure,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.program_structure") }}
    </template>
  </TheHeader>

  <BreadcrumbsNav />

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">

            <template v-if="programStructure">
              <component :is="programStructure" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
