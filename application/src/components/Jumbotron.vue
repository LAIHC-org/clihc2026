<script>
import { shallowRef, watch, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

export default {
    setup() {
        const { locale } = useI18n();
        const currentComponent = shallowRef(null);

        const loadComponent = async (newLocale) => {
            currentComponent.value = await getComponentForLocale(newLocale);
        };

        watch(locale, loadComponent, { immediate: true });

        async function getComponentForLocale(locale) {
            switch (locale) {
                case "en":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/en/Message.vue")
                    );
                case "es":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/es/Message.vue")
                    );
                case "pt":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/pt/Message.vue")
                    );
                default:
                    return null;
            }
        }

        // 🔹 LOGO SEGÚN IDIOMA
        const logoSrc = computed(() => {
            switch (locale.value) {
                case "en":
                    return "/assets/img/logos/clihc2026_en.png";
                case "pt":
                    return "/assets/img/logos/clihc2026_pt.png";
                case "es":
                default:
                    return "/assets/img/logos/clihc2026_es.png";
            }
        });

        return {
            currentComponent,
            logoSrc,
            Tr,
        };
    },
};
</script>

<template>
  <header class="header-2">
    <div
      class="page-header section-height-100 relative"
      style="background-image: url('/assets/img/banner-2.png')"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-lg-10 z-index-2 border-radius-xl mx-auto py-4 mt-7 mb-4 blur shadow-blur"
          >
            <div class="row align-items-center text-center">

              <!-- 🇧🇷 BRASIL -->
              <div class="col-md-3 mb-3 order-2 order-md-1">
                <img
                  :src="logoSrc"
                  height="120"
                  alt="CLIHC 2026 logo"
                  class="mb-3"
                />
                <h5 class="fw-bold">Aracaju, Brasil</h5>
                <p class="small mb-2">6–8 mayo 2026</p>
                <a
                  href="https://brazil.clihc2026.laihc.org"
                  class="btn btn-md bg-gradient-secondary btn-round"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver evento
                </a>
              </div>

              <!-- 🌎 CENTRAL -->
              <!--:src="logoSrc" -->
              <div class="col-md-6 my-3 order-1 order-md-2">
                <img
                  src="/assets/img/logos/clihc2023.svg"
                  height="120"
                  alt="CLIHC 2026 logo"
                  class="mb-3"
                />
                <p class="lead mb-2 fw-bold">
                  {{ $t("jumbotron.central_title") }}
                </p>
                <p class="small mb-3">
                  {{ $t("jumbotron.central_subtitle") }}
                </p>
                <RouterLink
                  :to="Tr.i18nRoute({ name: 'call-for-participation' })"
                  class="btn btn-lg bg-gradient-yellow btn-round"
                >
                  {{ $t("jumbotron.central_button") }}
                </RouterLink>
              </div>

              <!-- 🇲🇽 MÉXICO -->
              <div class="col-md-3 mb-3 order-3 order-md-3">
                <img
                  src="/assets/img/logos/clihc2026mx.png"
                  height="120"
                  alt="CLIHC 2026 logo"
                  class="mb-3"
                />
                <h5 class="fw-bold">Oaxaca, México</h5>
                <p class="small mb-2">27–29 mayo 2026</p>
                <a
                  href="https://mexico.clihc2026.laihc.org"
                  class="btn btn-md bg-gradient-secondary btn-round"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver evento
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
