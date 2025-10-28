<script>
import { /*ref*/shallowRef, watch, defineAsyncComponent } from 'vue'
import Tr from '@/i18n/translation'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const currentComponent = shallowRef(null)

    const loadComponent = async (newLocale) => {
      currentComponent.value = await getComponentForLocale(newLocale)
    }

    watch(locale, loadComponent, { immediate: true })

    async function getComponentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Description.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Description.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Description.vue'))
        default:
          return null
      }
    }

    return {
      currentComponent,
      Tr
    }
  }
}
</script>

<template>
    <section class="py-5 container" id="download-soft-ui">
        <div class="bg-gradient-dark position-relative border-radius-xl overflow-hidden">
            <img src="/assets/img/shapes/waves-white.svg" alt="" class="position-absolute start-0 top-md-0 w-100 opacity-6">
            <div class="container py-7 postion-relative z-index-2 position-relative">
                <div class="row">
                    <div class="col-md-7 mx-auto text-center">
                        
                        <template v-if="currentComponent">
                            <component :is="currentComponent" />
                        </template>                        
                        <!--
                        <a href="./accepted-papers" class="btn bg-gradient-yellow btn-round btn-lg">Accepted papers</a>
                        <a href="./schedule" class="btn bg-gradient-yellow btn-round btn-lg">Schedule</a>
                        <a href="./video-archives" class="btn bg-gradient-yellow btn-round btn-lg">Video archives</a>
                        -->
                        <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
												class="btn btn-lg  bg-gradient-yellow  btn-round"
                          >
                          {{ $t("jumbotron.button") }}
                        </RouterLink>           
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>