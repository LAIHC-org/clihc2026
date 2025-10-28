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
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates'})" class="uline">
                Ver todas las fechas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        Invitamos a profesionales, investigadores y estudiantes a presentar sus trabajos en la pista de pósters de CLIHC
        2023. Los pósters brindan una excelente oportunidad para que académicos y profesionales obtengan comentarios
        valiosos sobre trabajos en etapas tempranas y discutan posibles colaboraciones. Los pósters deben presentar trabajos
        en progreso, resultados preliminares, estudios a pequeña escala, noticias científicas y profesionales de última hora
        que muestren promesa, demostraciones de herramientas técnicas, etc. Las contribuciones se exhibirán en una sesión de
        pósters durante la conferencia CLIHC. Los trabajos presentados en la pista de pósters pueden estar escritos en
        inglés, español o portugués y deben estar redactados en forma de breves artículos de investigación autocontenidos.
    </p>

    <h3 id="cpt-dates">Fechas Importante (Pósteres)</h3>
    <ul>
        <li>Envío de artículos de pósters: <del>31 de julio</del> 11 de agosto EXTENDIDA</li>
        <li>Notificación: 28 de agosto</li>
        <li>Versión final: 14 de septiembre</li>
        <li>Evento: 30, 31 de octubre y 1 de noviembre</li>
    </ul>

    <h3>Detalles de la Presentación</h3>

    <P>
        Los autores que deseen enviar un artículo deben:
    </P>
    <ul>
        <li>
            Enviar un artículo de 4 páginas utilizando el <a href="https://www.acm.org/publications/proceedings-template"
                class="uline">nuevo formato de artículo maestro de ACM</a>. Los autores pueden elegir trabajar en uno de los
            siguientes formatos:
            <ul>
                <li>Microsoft Word</li>
                <li>LaTeX (recomendado)</li>
            </ul>
        </li>
        <li>
            Todos los materiales deben enviarse electrónicamente al <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferencias
                EasyChair</a>, a la pista de Talleres y Tutoriales, antes de la fecha límite.
        </li>
    </ul>
    <p>
        Su presentación debe ser un trabajo original. No puede estar siendo revisado simultáneamente para su publicación en
        otra conferencia o revista, ni haber sido publicado en otro lugar. Por favor, envíe referencias precisas y
        completas.
    </p>
    <p>
        Los pósters aceptados pueden elegir uno de los siguientes medios de publicación:
    </p>
    <ul>
        <li>Actas de la conferencia publicadas en ACM DL. Solo las presentaciones en inglés se pueden publicar en este
            medio. Si su presentación fue aceptada en español o portugués y desea publicar aquí, deberá traducir su
            presentación original al inglés.</li>
        <li>Avances en Interacción Humano-Computadora. Solo las presentaciones en español o inglés se pueden publicar en
            este medio. Si su presentación fue aceptada en portugués y desea publicar aquí, deberá traducir su presentación
            original al español o inglés.</li>
    </ul>

    <h3>Proceso de Revisión</h3>
    <p>
        Los artículos serán revisados de forma anónima por pares por miembros del Subcomité del Programa de la Pista de
        Pósters de CLIHC 2023 (por determinar). Las presentaciones serán evaluadas en función de su originalidad,
        importancia de la contribución al campo, corrección técnica y presentación.
    </p>
    <p>
        Los encargados de los pósters enviarán instrucciones para la exhibición de los pósters a los autores de los trabajos
        aceptados.
    </p>

    <h3>Asistencia</h3>
    <p>
        Al menos un autor de cada presentación aceptada debe registrarse para la conferencia y presentar el póster, dando
        preferencia a la presentación en persona. Sin embargo, también se podrían considerar opciones de presentación
        virtual.
    </p>

    <h3 class="my-4">{{ $t("organizers.posters_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/jaime.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jaime.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Jaime Muñoz Arteaga
                </template>
                <template #institution>
                    Universidad Autónoma de Aguascalientes, MX
                </template>
                <template #email>
                    posters@laihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Adriana Iñiguez
                </template>
                <template #institution>
                    Universidad de Guadalajara, MX
                </template>
                <template #email>
                    posters@laihc.org
                </template>
            </OrganizerItem>
        </div>
</div></template>