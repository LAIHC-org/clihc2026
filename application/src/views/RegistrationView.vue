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
    const contentComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      contentComponent.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Rates-and-registration.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Rates-and-registration.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Rates-and-registration.vue'))
        default:
          return null
      }
    }

    return {
      contentComponent,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>      
      {{ $t("nav.rates_and_registration_title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">

            <template v-if="contentComponent">
              <component :is="contentComponent" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>