<script>
    import TheHeader from '@/components/Header.vue';
    import OrganizerItem from '@/components/OrganizerItem.vue';

    import Tr from '@/i18n/translation'

    import { shallowRef, watch, defineAsyncComponent } from 'vue'
    import { useI18n } from 'vue-i18n'

    export default {
        components: {
            TheHeader,
            OrganizerItem
        },
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
                    return defineAsyncComponent(() => import('@/components/locales/en/Accessibility-authors.vue'))
                    case 'es':
                    return defineAsyncComponent(() => import('@/components/locales/es/Accessibility-authors.vue'))
                    case 'pt':
                    return defineAsyncComponent(() => import('@/components/locales/pt/Accessibility-authors.vue'))
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
    <TheHeader>
        <template #page-name>
            {{ $t("accessibility.title") }}
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <ol class="list-group list-group-numbered mb-4">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors', hash: '#language-recommendations'})" class="uline">
                                            {{ $t("accessibility.language_recommendations") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors', hash: '#accessible-document-author-recommendations'})" class="uline">
                                            {{ $t("accessibility.accessible_document") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors', hash: '#accessible-slide-author-recommendations'})" class="uline">
                                            {{ $t("accessibility.accessible_slide") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors', hash: '#accessible-video-author-recommendations'})" class="uline">
                                            {{ $t("accessibility.accessible_video") }}
                                        </RouterLink>                                            
                                    </div>
                                </div>
                            </li>
                        </ol>

                        <template v-if="currentComponent">
                            <component :is="currentComponent" />
                        </template> 

                        <h3 class="my-4">{{ $t("organizers.acccessibility_chairs_title") }}</h3>
                        <div class="row">
                            <div class="col-md-4">
                                <OrganizerItem>
                                <template #image>
                                    <div class="d-block blur-shadow-image">
                                    <img src="/assets/img/people/mike.png" alt="" class="img-fluid shadow rounded-3">
                                    </div>
                                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/mike.png&quot;);">
                                    </div>
                                </template>
                                <template #name>
                                    Miguel Angel Rodríguez Ortiz
                                </template>
                                <template #institution>
                                    Universidad de Colima, MX
                                </template>
                                <template #email>
                                </template>
                                </OrganizerItem>
                            </div>
                            <div class="col-md-4 mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/selene.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/selene.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Alba Selene Leon Arenas
                                        </template>
                                        <template #institution>
                                            MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section></template>