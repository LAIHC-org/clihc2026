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
            <template #name> Dr. Luciana Zaina </template>

            She holds a Full Professorship at the Department of Computing of the Federal
            University of São Carlos, Brazil, specializing in UX design and empirical
            research in HCI and Software Engineering.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'luciana-zaina')" class="uline">
                    Read more about Dr. Zaina
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

            He is a Research Scientist at the Robotics and AI Institute (RAI) with an
            interdisciplinary background spanning linguistics, robotics, and
            human-centered AI.
            <p class="mt-2">
                <a :href="speakerHref('brazil', 'pedro-reynolds')" class="uline">
                    Read more about Dr. Reynolds-Cuéllar
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
            <template #name> Prof. Ann Blandford </template>

            She is Professor of Human-Computer Interaction at University College London
            (UCL), with pioneering contributions to human-centered design and evaluation
            of interactive systems.

            <p class="mt-2">
                <a :href="speakerHref('brazil', 'ann-blandford')" class="uline">
                    Read more about Prof. Blandford
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

            A leading scholar in human-computer interaction and childhood, focused on
            technologies that support creativity, well-being, and access to information.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'jp-hourcade')" class="uline">
                    Read full bio
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
            <template #name> M.Sc. Odile Juárez </template>

            Mexican entrepreneur and co-founder of Mayordomm, advancing a more human
            vision of artificial intelligence for family organization and data privacy.

            <p class="mt-2">
                <a :href="speakerHref('mexico', 'odile-juarez')" class="uline">
                    Read full bio
                </a>
            </p>
        </SpeakerItem>
    </div>
</template>
