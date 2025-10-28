<script>
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
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
          return defineAsyncComponent(() => import('@/components/locales/en/Speakers-small.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Speakers-small.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Speakers-small.vue'))
        default:
          return null
      }
    }

    return {
      contentComponent,
    }
  }
}
</script>

<template>
    <section class="">
        <div class="container mt-4" id="speakers">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.keynotes") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.keynotes_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">                    
                    <template v-if="contentComponent">
                        <component :is="contentComponent" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>