<script setup>
import SpeakerLargeItem from "@/components/SpeakerLargeItem.vue";
</script>

<template>
    <SpeakerLargeItem>
        <template #image>
            <img
                id="ann-blandford"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/annBlandford.png"
                alt="Ann Blandford"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/annBlandford.png')"
            ></div>
        </template>
        <template #name> Dra. Ann Blandford </template>
        <template #subtitle> ACM Distinguished Speaker Program </template>

        <p>
            Es Profesora de Interacción Humano-Computador en el University College
            London (UCL). Se especializa en factores humanos para tecnologías de salud
            digital. Ha liderado proyectos nacionales sobre el diseño de dispositivos
            médicos interactivos para usabilidad y seguridad, y ha colaborado con
            clínicos, ingenieros y socios de la industria en el diseño y evaluación de
            tecnologías de salud interactivas para uso de clínicos, pacientes y apoyo
            al cuidado compartido. Es Fellow de la British Computer Society y miembro
            del UK Computing Research Committee. Es receptora del premio IFIP TC13
            Pioneer y miembro de la ACM CHI Academy.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="luciana-zaina"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/lucianaZaina.png"
                alt="Luciana Zaina"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/lucianaZaina.png')"
            ></div>
        </template>
        <template #name> Dra. Luciana Zaina </template>
        <template #subtitle> Profesora Titular en UFSCar, Brasil · CNPq Fellow DT-2 </template>

        <p>
            Es Profesora Titular en el Departamento de Computación de la Universidad
            Federal de São Carlos, Brasil. Su experiencia se centra en el diseño de UX y
            en estudios empíricos tanto en Interacción Humano-Computadora como en
            Ingeniería de Software. Ha sido investigadora principal en proyectos de
            Investigación, Desarrollo e Innovación financiados por agencias brasileñas
            (FAPESP, CNPq y FUNDEP), así como por empresas brasileñas de software. Fue
            destacada en una entrevista sobre el futuro del Agile UX en la industria,
            publicada en
            <em>Interaction Design: Beyond Human–Computer Interaction</em> (2023), uno de
            los libros de HCI más ampliamente adoptados en el ámbito académico y
            profesional. Sus intereses actuales de investigación incluyen el diseño y la
            evaluación de la experiencia de usuario, la experiencia de usuario en sistemas
            complejos y la experiencia de usuario a largo plazo, desarrollados en estrecha
            colaboración con la industria en Brasil. Desde 2020, es reconocida como CNPq
            Fellow (DT-2), un reconocimiento otorgado a investigadoras e investigadores
            brasileños considerados líderes destacados en el desarrollo de investigación
            aplicada orientada a la industria.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="pedro-reynolds"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/pedroReynolds.png"
                alt="Pedro Reynolds-Cuéllar"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/pedroReynolds.png')"
            ></div>
        </template>
        <template #name> Dr. Pedro Reynolds-Cuéllar </template>
        <template #subtitle> Investigador Científico en Robotics and AI Institute (RAI) </template>

        <p>
            Es Investigador Científico en el Robotics and AI Institute (RAI), donde
            desarrolla investigación que proporciona datos para apoyar decisiones sociales
            basadas en evidencia sobre el diseño, la integración y la regulación de la
            robótica y la inteligencia artificial. Es Licenciado en Ciencias en
            Lingüística por la Universidad Nacional de Colombia y cuenta con una Maestría
            en Ciencias del grupo Personal Robots del MIT Media Lab. Completó su doctorado
            de manera conjunta en los departamentos de Arts, Culture & Technology y Media
            Arts and Sciences del MIT Media Lab. También es cofundador de Diversa, un
            colectivo y organización de diseño enfocado en apoyar iniciativas de
            tecnología rural en Colombia.
        </p>
    </SpeakerLargeItem>
</template>
