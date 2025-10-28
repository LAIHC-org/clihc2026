<script>
import OrganizerItem from '@/components/OrganizerItem.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>31 de julio</del> <del>11 de agosto EXTENDIDA</del> <strong class="text-danger"> {{ $t("about.closed") }}</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates'})" class="uline">
                Ver todas las fechas importantes
            </RouterLink>            
        </div>
        </li>
    </ol> 

    <p>
        El CLIHC 2023 es la conferencia bienal que tiene como objetivo reunir a la comunidad latinoamericana de HCI. El
        Coloquio de Graduados del CLIHC 2023 brinda la oportunidad a estudiantes latinoamericanos de posgrado que trabajan
        en HCI y campos relacionados de explorar y desarrollar sus intereses de investigación en un taller
        interdisciplinario, bajo la guía de un panel de destacados investigadores.
    </p>

    <p>
        Invitamos a los estudiantes que consideren que se beneficiarían de este tipo de retroalimentación sobre su
        tesis/proyecto final a solicitar esta oportunidad única de compartir su investigación con otros estudiantes en una
        situación similar, así como con investigadores senior en el campo. Los solicitantes exitosos serán aquellos que
        muestren un tema claro y enfoque de investigación, y hayan progresado en su trabajo, pero que aún estén en un punto
        en el que puedan realizar cambios en su plan. Se espera la asistencia en persona para esta actividad.
    </p>

    <p>
        Además de indicar cómo se beneficiará de la participación, tanto usted como su asesor deben tener claro lo que
        pueden aportar al Coloquio de Graduados. Ser aceptado en el Coloquio implica un compromiso de brindar y recibir
        comentarios reflexivos con miras a dar forma a la HCI en América Latina y a los participantes en sus respectivos
        campos.
    </p>

    <h3>Objetivos</h3>
    <ul>
        <li>Ofrecer a los estudiantes de posgrado de HCI de América Latina la oportunidad de compartir y discutir su trabajo
            ante investigadores experimentados.</li>
        <li>Proporcionar comentarios sobre la investigación actual de los estudiantes y orientación sobre futuras
            direcciones de investigación.</li>
        <li>Ofrecer a cada estudiante comentarios y perspectivas frescas sobre su trabajo por parte de investigadores y
            estudiantes de fuera de su propia institución.</li>
        <li>Promover el desarrollo de una comunidad de académicos de apoyo y un espíritu de investigación colaborativa entre
            estudiantes de posgrado de diferentes universidades de América Latina.</li>
        <li>Permitir que la comunidad conozca los proyectos de investigación desarrollados por estudiantes de posgrado.</li>
    </ul>

    <h3>Durante el Coloquio de Graduados</h3>

    <p>
        Los estudiantes aceptados presentarán su trabajo al grupo, con un tiempo sustancial dedicado a la discusión y
        preguntas por parte de investigadores participantes y otros estudiantes. Se proporcionarán instrucciones detalladas
        una vez aceptados.
    </p>

    <p>
        Cada participante también deberá traer una versión pequeña de un póster que presente su trabajo (por ejemplo,
        utilizando papel tamaño carta o A4) para compartirlo con mentores y otros estudiantes durante las sesiones del
        Coloquio. Se espera la asistencia en persona para esta actividad.
    </p>

    <h3>Envío de propuestas</h3>

    <P>
        La propuesta debe incluir los siguientes cuatro componentes, todos escritos en inglés, portugués o español.
    </P>
    <ul>
        <li>
            Resumen extendido:
            una descripción de investigación de 4 páginas (incluyendo referencias) que cubra los aspectos centrales de su
            trabajo de posgrado. Este documento debe seguir la última versión del <a
                href="https://www.acm.org/publications/proceedings-template" class="uline">formato de plantilla de artículo
                principal de ACM</a>. Los puntos clave de este documento incluyen:
            <ul>
                <li>Su situación, es decir, el contexto del programa de posgrado en el que se realiza su trabajo
                    (institución de origen, país, programa, año de estudio, etc.).</li>
                <li>Contexto y motivación que impulsan su investigación.</li>
                <li>Objetivos/preguntas de investigación.</li>
                <li>Antecedentes/revisión de literatura de trabajos clave que enmarcan su investigación.</li>
                <li>Hipótesis/tesis y/o declaración del problema.</li>
                <li>Enfoque y métodos de investigación seguidos, incluyendo justificación relevante.</li>
                <li>Resultados hasta la fecha y su validez.</li>
                <li>Estado de la disertación y próximos pasos (es decir, lo que ha hecho y lo que le falta hacer).</li>
                <li>Contribuciones actuales y esperadas.</li>
            </ul>
        </li>

        <li>
            Una declaración de un párrafo sobre los beneficios esperados de la participación tanto para usted como para los
            demás participantes del coloquio (es decir, qué contribuirá y qué obtendrá) (máximo 1 página).
        </li>

        <li>
            Una carta de nominación de su asesor principal de tesis/proyecto final, que aborde el valor que tendría el
            Coloquio de Graduados para usted, qué contribución es probable que haga al evento y por qué este es un buen
            momento para que participe (máximo 1 página).
        </li>

        <li>
            Una versión concisa de su currículum vitae actual, enfatizando la formación académica, experiencia de
            investigación y publicaciones relevantes (si las hubiera) (1-2 páginas).
        </li>

        <li>
            Envíe su propuesta como un archivo PDF único a través del <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferencias EasyChair
            </a>, en la categoría del Coloquio de Graduados, antes de la fecha límite.
        </li>

    </ul>
    <p>
        Su propuesta debe ser un trabajo original. No puede estar bajo revisión concurrente para su publicación en otra
        conferencia o revista, ni haber sido publicada en otro lugar. Por favor, envíe referencias precisas y completas.
    </p>
    <p>
        Las propuestas aceptadas pueden elegir uno de los siguientes medios de publicación:
    </p>
    <ul>
        <li>Actas de la conferencia publicadas en ACM DL. Solo se pueden publicar en este medio las propuestas en inglés. Si
            su propuesta fue aceptada en español o portugués y desea publicar aquí, deberá traducir su propuesta original al
            inglés.</li>
        <li>Avances en Interacción Humano-Computadora. Solo se pueden publicar en este medio las propuestas en español o
            inglés. Si su propuesta fue aceptada en portugués y desea publicar aquí, deberá traducir su propuesta original
            al español o inglés.</li>
    </ul>

    <h3>Proceso de selección</h3>
    <p>
        La revisión y decisión de aceptación equilibrarán muchos factores. Esto incluye la calidad de su propuesta y en qué
        etapa se encuentra en su programa de posgrado. Los candidatos que tengan una idea claramente desarrollada, que sean
        considerados formalmente por su institución como trabajando en su tesis o proyecto final, y que aún tengan tiempo
        para ser influenciados por su participación en el Coloquio, recibirán la consideración más fuerte.
    </p>
    <p>
        Además de la evaluación de la calidad de la investigación, el proceso de selección también considerará factores
        adicionales. El objetivo es identificar un grupo de estudiantes que se beneficiarán significativamente del Coloquio
        y se apoyarán mutuamente en su crecimiento. Como grupo, los candidatos aceptados exhibirán una diversidad de
        antecedentes y temas. Se tomará en cuenta su institución, y es poco probable que aceptemos más de dos estudiantes de
        la misma institución y casi con certeza no aceptaremos más de un estudiante con el mismo asesor.
    </p>

    <h3 id="cgc-dates">Fechas importantes (CG)</h3>
    <ul>
        <li>Envío de propuestas para el CG: <del>31 de julio</del> 11 de agosto EXTENDIDA</li>
        <li>Notificación: 28 de agosto</li>
        <li>Versión final: 11 de septiembre</li>
        <li>Coloquio de Graduados: Por determinar</li>
    </ul>


    <h3 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/huizilopoztli.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/huizilopoztli.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Huizilopoztli Luna Garcia
                </template>
                <template #institution>
                    UAZ, MX
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/carolina.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/carolina.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Carolina Fuentes
                </template>
                <template #institution>
                    Cardiff University, UK
                </template>
                <template #email>
                </template>
        </OrganizerItem>
    </div>
</div></template>