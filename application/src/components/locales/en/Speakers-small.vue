<script>
import SpeakerItem from '../../SpeakerItem.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        SpeakerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/roberto.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/roberto.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Roberto Martinez-Maldonado
            </template>

            holds a Ph.D. in Information Technologies and serves as a Senior Lecturer in Learning Analytics and
            Human-Computer Interaction at Monash University, Australia. He's known for pioneering research in Human-Centred
            AI in Education, has chaired international conferences, and is an Associate Editor for the International Journal
            of Artificial Intelligence in Education.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/marisol2.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/marisol2.png&quot;);"></div>
            </template>
            <template #name>
                Dr. Marisol Wong-Villacres
            </template>

            An Associate Professor at the Computer Science Program of Escuela Superior Politécnica del Litoral, Guayaquil,
            Ecuador, earned her Ph.D. in Human-Centered Computing from the Georgia Institute of Technology in 2021. Her
            research focuses on strengths-based co-design of technologies for vulnerable groups, departing from the
            traditional needs-based approach.
        </SpeakerItem>
    </div>
    <div class="row">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/claudia.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/claudia.png&quot;);"></div>
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
                <img src="/assets/img/people/philippe.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/philippe.png&quot;);"></div>
            </template>
            <template #name>
                Dr. Philippe Palanque
            </template>

            Computer Science professor at the University of Toulouse 3, specializes in Command and Control Systems,
            including drones, multimodal military interfaces, and aviation safety. With extensive research contributions,
            he's an ACM SIGCHI CHI Academy member and chairs the IFIP Technical Assembly.
        </SpeakerItem>
    </div>
</template>