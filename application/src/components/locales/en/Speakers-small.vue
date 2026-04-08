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
    <!--
    <div class="row">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/claudia.png" alt="Claudia" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/claudia.png&quot;);"></div>
            </template>
            <template #name>
                Dr. Claudia López Moncada
            </template>

            Is an academic at the Department of Informatics at UTFSM in Valparaíso, Chile. She's also a researcher at the
            National Center for Artificial Intelligence (CENIA) and the Millennium Nucleus for Future of Artificial
            Intelligence Research (FAIR) in Chile. With a Ph.D. from the University of Pittsburgh, her work focuses on
            human-computer interaction (HCI) and person-centered artificial intelligence.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/philippe.png" alt="Philippe" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/philippe.png&quot;);"></div>
            </template>
            <template #name>
                Dr. Philippe Palanque
            </template>

            Computer Science professor at the University of Toulouse 3, specializes in Command and Control Systems,
            including drones, multimodal military interfaces, and aviation safety. With extensive research contributions,
            he's an ACM SIGCHI CHI Academy member and chairs the IFIP Technical Assembly.
        </SpeakerItem>
    </div>
     -->
</template>
