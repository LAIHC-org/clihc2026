<script>
import { /*ref*/shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

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
          return defineAsyncComponent(() => import('@/components/locales/en/Message.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Message.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Message.vue'))
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
		<!-- Jumbotron -->
		<header class="header-2">
			<div class="page-header section-height-100 relative"
				style="background-image: url('./assets/img/banner-2.png')">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 z-index-2 border-radius-xl mx-auto py-3 mt-7 mb-4 blur shadow-blur">
							<div class="row">
								<div class="col-md-12 text-center">
									<h1 class="pt-3">
										<img src="/assets/img/logos/clihc2023.svg" height="55" alt=""
											style="position: relative; top: -2px;"><br>
										CLIHC 2023
									</h1>
									<p class="lead mt-3">
										{{ $t("jumbotron.conference") }}
									</p>
									<p class="lead mt-2">
										<strong>
											{{ $t("jumbotron.date") }} <br>
											Puebla, México<br>
										</strong>
									</p>
									<p class="lead pt-2">
										<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
												class="btn btn-lg  bg-gradient-yellow  btn-round"
											>
											{{ $t("jumbotron.button") }}
										</RouterLink>
										<!--
										<template v-if="currentComponent">
											<component :is="currentComponent" />
										</template>
										-->
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- End Jumbotron -->
</template>