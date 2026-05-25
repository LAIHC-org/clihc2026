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

            É Professora Titular no Departamento de Computação da Universidade Federal de
            São Carlos, Brasil, com especialização em design de UX e pesquisa empírica em
            Interação Humano-Computador e Engenharia de Software.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'luciana-zaina')" class="uline">
                    Leia mais sobre a Dra. Zaina
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

            É Pesquisador Científico no Robotics and AI Institute (RAI), com uma formação
            interdisciplinar que abrange linguística, robótica e inteligência artificial
            centrada no ser humano.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'pedro-reynolds')" class="uline">
                    Leia mais sobre o Dr. Reynolds-Cuéllar
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

            É Professora de Interação Humano-Computador na University College London
            (UCL), com contribuições pioneiras em design centrado no ser humano e
            avaliação de sistemas interativos.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'ann-blandford')" class="uline">
                    Leia mais sobre a Dra. Blandford
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

            Referência em interação humano-computador e infância, com atuação voltada a
            tecnologias que apoiam a criatividade, o bem-estar e o acesso à informação.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'jp-hourcade')" class="uline">
                    Ver biografia completa
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
            <template #name> Ma. Odile Juárez </template>

            Empreendedora mexicana e cofundadora da Mayordomm, promove uma visão mais
            humana da inteligência artificial aplicada à organização familiar e à
            privacidade de dados.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'odile-juarez')" class="uline">
                    Ver biografia completa
                </a>
            </p>
        </SpeakerItem>
    </div>
</template>
