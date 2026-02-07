<script>
import SpeakerItem from "../../SpeakerItem.vue";
import Tr from "@/i18n/translation";

export default {
    components: {
        SpeakerItem,
    },
    setup() {
        return {
            Tr,
        };
    },
};
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem venue="brazil">
            <template #image>
                <img
                    src="/assets/img/people/lucianaZaina.png"
                    alt="Luciana Zaina"
                    class="img-fluid shadow rounded-3"
                />
            </template>
            <template #image-shadow>
                <div
                    class="colored-shadow"
                    style="background-image: url('/assets/img/people/lucianaZaina.png')"
                ></div>
            </template>
            <template #name> Dra. Luciana Zaina </template>

            Es Profesora Titular en el Departamento de Computación de la Universidad
            Federal de São Carlos, Brasil, con especialización en diseño de UX e
            investigación empírica en Interacción Humano-Computadora y en Ingeniería de
            Software.

            <p class="mt-2">
                <RouterLink
                    :to="
                        Tr.i18nRoute({ name: 'keynote-speakers', hash: '#luciana-zaina' })
                    "
                    class="uline"
                >
                    Leer más sobre la Dra. Zaina
                </RouterLink>
            </p>
        </SpeakerItem>

        <SpeakerItem venue="brazil">
            <template #image>
                <img
                    src="/assets/img/people/pedroReynolds.png"
                    alt="Pedro Reynolds-Cuéllar"
                    class="img-fluid shadow rounded-3"
                />
            </template>
            <template #image-shadow>
                <div
                    class="colored-shadow"
                    style="background-image: url('/assets/img/people/pedroReynolds.png')"
                ></div>
            </template>
            <template #name> Dr. Pedro Reynolds-Cuéllar </template>

            Es Investigador Científico en el Robotics and AI Institute (RAI), con una
            formación interdisciplinaria que abarca la lingüística, la robótica y la
            inteligencia artificial centrada en las personas.

            <p class="mt-2">
                <RouterLink
                    :to="
                        Tr.i18nRoute({
                            name: 'keynote-speakers',
                            hash: '#pedro-reynolds',
                        })
                    "
                    class="uline"
                >
                    Leer más sobre el Dr. Reynolds-Cuéllar
                </RouterLink>
            </p>
        </SpeakerItem>
    </div>
</template>
