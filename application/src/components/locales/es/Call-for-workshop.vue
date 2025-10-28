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
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates'})" class="uline">
                Ver todas las fechas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        Los talleres y tutoriales de CLIHC son presentaciones en profundidad sobre temas fundamentales o de vanguardia
        presentados por investigadores o profesionales en el campo de la Interacción Humano-Computadora (HCI, por sus siglas
        en inglés). Los talleres y tutoriales brindan a los participantes la oportunidad de adquirir nuevas habilidades y
        ofrecen posibilidades de conocer nuevas personas y discutir temas de interés compartido. El alcance de los talleres
        y tutoriales es amplio e incluye temas como nuevas tecnologías, enfoques y metodologías de investigación, prácticas
        de diseño, conocimientos sobre usuarios/consumidores, investigaciones sobre nuevos
        servicios/aplicaciones/interfaces, estadísticas y mucho más. Se recomienda encarecidamente la inclusión de realidad
        virtual o aumentada, computación portátil y aplicaciones en general con tecnología móvil en mente.
    </p>
    <p>
        Un taller o tutorial debe centrarse en su tema en detalle e incluir referencias a los artículos o materiales
        "imprescindibles" dentro de su dominio. Se da la bienvenida a un enfoque participativo en el que los participantes
        del tutorial participen activamente en ejercicios, aunque no es obligatorio. La audiencia esperada variará en
        términos de conocimientos previos, pero estará compuesta principalmente por investigadores, estudiantes de
        doctorado, profesionales y educadores. También se reciben propuestas de talleres y tutoriales de miembros de la
        industria.
    </p>
    <p>
        El tema general de la conferencia en 2023 es Cultura e Inteligencia Artificial, por lo que invitamos a los talleres
        y tutoriales a discutir aspectos éticos en su trabajo, como parte de sus definiciones de problemas, diseño de
        sistemas, diseño de experimentos, adopción de instrumentos y métricas, y conclusiones.
    </p>

    <h3 id="cwt-dates">Fechas Importantes</h3>
    <ul>
        <li>Fecha límite de envío: <del>31 de julio</del> 11 de agosto EXTENDIDA</li>
        <li>nNotificación: 28 de agosto</li>
        <li>Versión final: 14 de septiembre</li>
        <li>Evento 30 a 31 de octubre, 1 de noviembre</li>
    </ul>

    <h3>Plataforma de Envío</h3>

    <p>
        Todos los materiales deben ser enviados electrónicamente al <a
            href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferencias EasyChair</a>, en
        la sección de Talleres y Tutoriales, antes de la fecha límite.
    </p>

    <h3>Formato y Extensión de la Submisión</h3>

    <ul>
        <li>
            El formato de envío a utilizar para cada categoría seguirá el <a
                href="https://www.acm.org/publications/proceedings-template" class="uline">nuevo formato de Artículo Maestro
                de ACM</a>. Los autores pueden optar por trabajar en uno de los siguientes formatos:
            <ul>
                <li>Microsoft Word</li>
                <li>LaTeX (recomendado)</li>
            </ul>
        </li>
        <li>
            Máximo 4 páginas (excluyendo referencias)
        </li>
        <li>
            CLIHC acepta submisiones en español, inglés y portugués, pero solo las submisiones en inglés pueden ser
            publicadas en ACM DL y solo las submisiones en español e inglés pueden ser publicadas en la revista AMEXIHC.
        </li>
        <li>
            <a href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
                class="uline">Guía para Submisiones Accesibles</a>
        </li>
    </ul>

    <h3>Información Rápida</h3>
    <p>
        CLICH 2023 se llevará a cabo en persona (con participación híbrida) del 30 de octubre al 1 de noviembre de 2023 en
        Puebla, México. La presentación puede realizarse en persona o de forma remota. Al menos un autor debe registrarse
        para la conferencia, ya sea virtual o presencialmente.
    </p>

    <h3>Preparación de la Submisión</h3>
    <p>En su propuesta, por favor incluya:</p>
    <ul>
        <li>El título del taller o tutorial</li>
        <li>Duración recomendada del taller o tutorial (mínimo una hora, máximo tres horas)</li>
        <li>Objetivos de aprendizaje del taller o tutorial</li>
        <li>La audiencia(s) a la que está dirigido el taller o tutorial</li>
        <li>Los temas tratados y la profundidad con la que se abordarán</li>
        <li>Resumen de los materiales proporcionados a los participantes</li>
        <li>Una breve biografía del instructor o los instructores</li>
        <li>Información sobre el modelo de entrega del taller (por ejemplo, presencial o híbrido). Se recomienda
            encarecidamente la asistencia presencial del presentador del taller o tutorial.</li>
    </ul>

    <h3>Proceso de Selección</h3>
    <p>
        Los talleres y tutoriales serán revisados por un comité que decidirá su aceptación final. Una vez aceptada la
        propuesta, será responsabilidad de los autores del taller o tutorial 1) promocionar el evento a través de los medios
        elegidos (por ejemplo, un sitio web, Twitter), 2) gestionar el proceso de aceptación de submisiones y selección de
        participantes, y 3) si se desea que los documentos de posición sean publicados en las actas de ACM o en la revista
        AMEXIHC, los autores del taller o tutorial deberán proponer un comité de programa.
    </p>

    <h3>Anonimato</h3>
    <p>
        Las submisiones de talleres y tutoriales no se envían de forma anónima, es decir, los instructores no eliminan sus
        nombres y afiliaciones de los materiales de envío.
    </p>

    <h3>Publicación</h3>
    <p>
        Las propuestas de talleres y tutoriales aceptadas pueden elegir una de las siguientes opciones de publicación:
    </p>

    <ul>
        <li>Actas de la Conferencia publicadas en ACM DL. Solo las submisiones en inglés pueden ser publicadas en esta
            opción. Si su submisión fue aceptada en español o portugués y desea publicar aquí, deberá traducir su submisión
            original al inglés. </li>
        <li><a href="http://aihc.amexihc.org/index.php/aihc" class="uline">Avances en Interacción Humano-Computadora.</a>
            Solo las submisiones en español o inglés pueden ser publicadas en esta opción. Si su submisión fue aceptada en
            portugués y desea publicar aquí, deberá traducir su submisión original al español o inglés.</li>
    </ul>

    <h3 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/cesar.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/cesar.png&quot;);">
                    </div>
                </template>
                <template #name>
                    César Collazos
                </template>
                <template #institution>
                    U. Cauca, CO
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/luciana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/luciana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Luciana Sá Brito
                </template>
                <template #institution>
                    Universidade Federal do Rio de Janeiro, Brasil
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>