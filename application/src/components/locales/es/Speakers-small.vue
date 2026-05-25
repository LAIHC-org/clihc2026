<script>
import SpeakerItem from "../../SpeakerItem.vue";
import Tr from "@/i18n/translation";

export default {
    components: {
        SpeakerItem,
    },
    methods: {
        speakerHref(venue, hash) {
            const anchor = hash.startsWith("#") ? hash : `#${hash}`;
            const path = `/${Tr.currentLocale}/keynote-speakers${anchor}`;

            if (venue === "brazil") {
                return `https://brazil.clihc2026.laihc.org${path}`;
            }

            if (venue === "mexico") {
                return `https://mexico.clihc2026.laihc.org${path}`;
            }

            return path;
        },
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
                <a :href="speakerHref('brazil', 'luciana-zaina')" class="uline">
                    Leer más sobre la Dra. Zaina
                </a>
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
                <a :href="speakerHref('brazil', 'pedro-reynolds')" class="uline">
                    Leer más sobre el Dr. Reynolds-Cuéllar
                </a>
            </p>
        </SpeakerItem>

        <SpeakerItem venue="brazil">
            <template #image>
                <img
                    src="/assets/img/people/annBlandford.png"
                    alt="Ann Blandford"
                    class="img-fluid shadow rounded-3"
                />
            </template>
            <template #image-shadow>
                <div
                    class="colored-shadow"
                    style="background-image: url('/assets/img/people/annBlandford.png')"
                ></div>
            </template>
            <template #name> Dra. Ann Blandford </template>

            Es Profesora de Interacción Humano-Computadora en el University College London
            (UCL), con contribuciones pioneras en diseño centrado en las personas y
            evaluación de sistemas interactivos.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'ann-blandford')" class="uline">
                    Leer más sobre la Dra. Blandford
                </a>
            </p>
        </SpeakerItem>
    </div>

    <div class="row">
        <SpeakerItem venue="mexico">
            <template #image>
                <img
                    src="/assets/img/people/jpOurcade.jpg"
                    alt="Juan Pablo Hourcade"
                    class="img-fluid shadow rounded-3"
                />
            </template>
            <template #image-shadow>
                <div
                    class="colored-shadow"
                    style="background-image: url('/assets/img/people/jpOurcade.jpg')"
                ></div>
            </template>
            <template #name> Dr. Juan Pablo Hourcade </template>

            Referente en interacción humano-computadora e infancia, con trabajo centrado
            en tecnologías que apoyan la creatividad, el bienestar y el acceso a la
            información.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'jp-hourcade')" class="uline">
                    Ver biografía completa
                </a>
            </p>
        </SpeakerItem>

        <SpeakerItem venue="mexico">
            <template #image>
                <img
                    src="/assets/img/people/odile.png"
                    alt="Odile Juárez"
                    class="img-fluid shadow rounded-3"
                />
            </template>
            <template #image-shadow>
                <div
                    class="colored-shadow"
                    style="background-image: url('/assets/img/people/odile.png')"
                ></div>
            </template>
            <template #name> Mtra. Odile Juárez </template>

            Emprendedora mexicana y cofundadora de Mayordomm, impulsa una visión más
            humana de la inteligencia artificial aplicada a la organización familiar y la
            privacidad de datos.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'odile-juarez')" class="uline">
                    Ver biografía completa
                </a>
            </p>
        </SpeakerItem>
    </div>
</template>
