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
    const tableComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      tableComponent.value = await getTableForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getTableForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/CallsTable.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/CallsTable.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/CallsTable.vue'))
        default:
          return null
      }
    }

    return {
      tableComponent,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("calls.title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">

            <template v-if="tableComponent">
              <component :is="tableComponent" />
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