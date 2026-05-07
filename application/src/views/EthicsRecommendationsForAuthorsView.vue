<script>
import TheHeader from "@/components/Header.vue";

import { shallowRef, watch, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

export default {
    components: {
        TheHeader,
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
                        import("@/components/locales/en/Ethics-recommendations-authors.vue")
                    );
                case "es":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/es/Ethics-recommendations-authors.vue")
                    );
                case "pt":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/pt/Ethics-recommendations-authors.vue")
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
            {{ $t("ethics.title") }}
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
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
