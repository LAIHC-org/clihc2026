<script>
import TheHeader from "@/components/Header.vue";
import OrganizerItem from "@/components/OrganizerItem.vue";

import { shallowRef, watch, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

export default {
    components: {
        TheHeader,
        OrganizerItem,
    },
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
                        import("@/components/locales/en/Accessibility-authors.vue")
                    );
                case "es":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/es/Accessibility-authors.vue")
                    );
                case "pt":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/pt/Accessibility-authors.vue")
                    );
                default:
                    return null;
            }
        }

        return {
            currentComponent,
        };
    },
};
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("accessibility.title") }}
        </template>
    </TheHeader>

    <BreadcrumbsNav />

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <template v-if="currentComponent">
                            <component :is="currentComponent" />
                        </template>

                        <h3 class="my-4">{{ $t("organizers.diversity_and_inclusion_chairs_title") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("organizers.diversity_and_inclusion_chairs_description") }}
                        </p>
                        <div class="row">
                            <div class="col-md-4">
                                <OrganizerItem>
                                    <template #image>
                                        <div class="d-block blur-shadow-image">
                                            <img
                                                src="/assets/img/people/diegoZabot.png"
                                                alt="Diego Zabot"
                                                class="img-fluid shadow rounded-3"
                                            />
                                        </div>
                                        <div
                                            class="colored-shadow"
                                            style="
                                                background-image: url('/assets/img/people/diegoZabot.png');
                                            "
                                        ></div>
                                    </template>
                                    <template #name> Dr. Diego Zabot </template>
                                    <template #institution>
                                        Universidade Federal da Bahia (UFBA), BR
                                    </template>
                                    <template #email> </template>
                                </OrganizerItem>
                            </div>

                            <div class="col-md-4">
                                <OrganizerItem>
                                    <template #image>
                                        <div class="d-block blur-shadow-image">
                                            <img
                                                src="/assets/img/nophoto.png"
                                                alt="Daniela Cardoso Tavares"
                                                class="img-fluid shadow rounded-3"
                                            />
                                        </div>
                                        <div
                                            class="colored-shadow"
                                            style="background-image: url('/assets/img/nophoto.png')"
                                        ></div>
                                    </template>
                                    <template #name> MSc. Daniela Cardoso Tavares </template>
                                    <template #institution>
                                        Universidade Federal do Rio de Janeiro (UFRJ), BR
                                    </template>
                                    <template #email> </template>
                                </OrganizerItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
