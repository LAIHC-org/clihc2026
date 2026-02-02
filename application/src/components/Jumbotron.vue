<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";
import Message from "@/components/Message.vue";

export default {
    setup() {
        const { locale } = useI18n();

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
            logoSrc,
            Tr,
        };
    },
    components: {
        Message
    }
};
</script>

<template>
    <!-- Jumbotron -->
    <header class="header-2">
        <div
            class="page-header section-height-100 relative"
            style="background-image: url('/assets/img/banner-2.png')"
        >
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-8 z-index-2 border-radius-xl mx-auto py-3 mt-7 mb-4 blur shadow-blur"
                    >
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <h1 class="pt-3">
                                    <img
                                        :src="logoSrc"
                                        height="250"
                                        alt="CLIHC 2026 logo"
                                        style="position: relative; top: -2px"
                                    /><br />
                                </h1>
                            </div>
                            <div class="col-md-8 text-center">
                                <p class="lead mt-3">
                                    {{ $t("jumbotron.conference") }}
                                </p>
                                <p class="lead mt-2">
                                    <strong>
                                        {{ $t("jumbotron.date") }} <br />
                                        Aracaju, Brazil<br />
                                    </strong>
                                </p>

                                <p class="lead pt-2">
                                    <RouterLink
                                        :to="
                                            Tr.i18nRoute({
                                                name: 'call-for-participation',
                                            })
                                        "
                                        class="btn btn-lg bg-gradient-yellow btn-round"
                                    >
                                        {{ $t("jumbotron.button") }}
                                    </RouterLink>

                                    <!--
										<Message />
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
