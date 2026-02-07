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

            É Professora Titular no Departamento de Computação da Universidade Federal de
            São Carlos, Brasil, com especialização em design de UX e pesquisa empírica em
            Interação Humano-Computador e Engenharia de Software.

            <p class="mt-2">
                <RouterLink
                    :to="
                        Tr.i18nRoute({ name: 'keynote-speakers', hash: '#luciana-zaina' })
                    "
                    class="uline"
                >
                    Leia mais sobre a Dra. Zaina
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

            É Pesquisador Científico no Robotics and AI Institute (RAI), com uma formação
            interdisciplinar que abrange linguística, robótica e inteligência artificial
            centrada no ser humano.

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
                    Leia mais sobre o Dr. Reynolds-Cuéllar
                </RouterLink>
            </p>
        </SpeakerItem>
    </div>
</template>
