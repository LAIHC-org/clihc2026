<script>
import TheHeader from '@/components/Header.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader
  },
  setup() {
    const { locale } = useI18n()
    const Component = shallowRef(null)

    const loadComponents = async (newLocale) => {
      Component.value = await getCfpForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getCfpForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-workshop.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-workshop.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Call-for-workshop.vue'))
        default:
          return null
      }
    }

    return {
      Component,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("calls.cwt") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">

            <!-- call for posters-->
            <template v-if="Component">
              <component :is="Component" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
dt {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}
</style>