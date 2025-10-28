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

            Doctor en Tecnologías de la Información, es Profesor Senior en Analítica de Aprendizaje e Interacción
            Humano-Computadora en la Universidad Monash, Australia. Destacado por su investigación en Inteligencia
            Artificial Centrada en el Ser Humano en Educación, preside conferencias internacionales y es Editor Asociado de
            la Revista Internacional de Inteligencia Artificial en Educación.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/marisol2.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/marisol2.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Marisol Wong-Villacres
            </template>

            Profesora Asociada en el Programa de Ciencias de la Computación de la Escuela Superior Politécnica del Litoral
            en Guayaquil, Ecuador, obtuvo su Doctorado en Computación Centrada en el Ser Humano en el Instituto de
            Tecnología de Georgia en 2021. Su investigación se enfoca en el diseño de tecnologías basado en fortalezas para
            grupos vulnerables, alejándose del enfoque tradicional en necesidades.
        </SpeakerItem>
    </div>
    <div class="row">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/claudia.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/claudia.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Claudia López Moncada
            </template>

            Es académica en el Departamento de Informática de la UTFSM en Valparaíso, Chile. Además, es investigadora en el
            Centro Nacional de Inteligencia Artificial (CENIA) y en el Núcleo Milenio de Investigación de Futuros de la
            Inteligencia Artificial (FAIR) en Chile. Con un doctorado de la Universidad de Pittsburgh, su trabajo se centra
            en la interacción humano-computador (HCI) y la inteligencia artificial centrada en las personas.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/philippe.png" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/philippe.png&quot;);">
                </div>
            </template>
            <template #name>
                Dr. Philippe Palanque
            </template>

            Profesor de Ciencias de la Computación en la Universidad Toulouse 3, se especializa en Sistemas de Comando y
            Control, incluyendo drones, interfaces militares multimodales y seguridad en la aviación. Con valiosas
            contribuciones a la investigación, es miembro de la Academia CHI de ACM SIGCHI y preside la Asamblea Técnica de
            la IFIP.
    </SpeakerItem>
</div></template>