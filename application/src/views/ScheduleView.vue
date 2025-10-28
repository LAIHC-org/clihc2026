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
        const contentComponent = shallowRef(null)

        const loadComponents = async (newLocale) => {
            contentComponent.value = await getContentForLocale(newLocale)
        }

        watch(locale, loadComponents, { immediate: true })

        async function getContentForLocale(locale) {
            switch (locale) {
                case 'en':
                    return defineAsyncComponent(() => import('@/components/locales/en/Schedule.vue'))
                case 'es':
                    return defineAsyncComponent(() => import('@/components/locales/es/Schedule.vue'))
                case 'pt':
                    return defineAsyncComponent(() => import('@/components/locales/pt/Schedule.vue'))
                default:
                    return null
            }
        }

        return {
            contentComponent,
            Tr
        }
    }
}
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("nav.schedule") }}
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-12">
                    <template v-if="contentComponent">
                        <component :is="contentComponent" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>