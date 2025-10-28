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
        </div>
        </li>
    </ol>

    <h3 id="sdc-dates">Fechas Importantes</h3>
    <ul>
        <li>Fecha límite de envío: <del>31 de julio</del> 11 de agosto EXTENDIDA</li>
        <li>Notificación: 28 de agosto</li>
        <li>Versión final: 14 de septiembre (para publicación en inglés en ACM DL o en español en "Avances en Interacción
            Humano-Computadora")</li>
        <li>Evento: 30 y 31 de octubre, 1 de noviembre</li>
    </ul>
    <p>
        Las fechas límite son a medianoche AoE (en cualquier parte del mundo).
    </p>

    <h3>¿Qué es la competencia de diseño para estudiantes en CLIHC 2023?</h3>

    <p>La Competencia de Diseño para Estudiantes tiene tres objetivos:</p>
    <ul>
        <li>Brindar una oportunidad para que los estudiantes de diversas áreas (por ejemplo, ciencias de la computación,
            HCI, diseño industrial, diseño de productos, diseño visual, diseño de interacción, emprendimiento, etc.)
            participen y demuestren sus habilidades de resolución de problemas y diseño en una competencia internacional con
            sus pares.</li>
        <li>Proporcionar una oportunidad para que los estudiantes que presenten en la competencia de diseño se encuentren
            con la comunidad de CLIHC.</li>
        <li>Proporcionar perspectivas refrescantes sobre cómo los equipos de diseño de diferentes disciplinas y diferentes
            partes del mundo abordan un problema de diseño común.</li>
    </ul>

    <h3>El desafío de diseño: soluciones apropiadas para todos</h3>
    <p>
        Les pedimos que contribuyan a uno (o varios) de los 17 Objetivos de Desarrollo Sostenible identificados por las
        Naciones Unidas:
    </p>

    <ul>
        <li>Fin de la Pobreza</li>
        <li>Hambre Cero</li>
        <li>Salud y Bienestar</li>
        <li>Educación de Calidad</li>
        <li>Igualdad de Género</li>
        <li>Agua Limpia y Saneamiento</li>
        <li>Energía Asequible y No Contaminante</li>
        <li>Trabajo Decente y Crecimiento Económico</li>
        <li>Industria, Innovación e Infraestructura</li>
        <li>Reducción de las Desigualdades</li>
        <li>Ciudades y Comunidades Sostenibles</li>
        <li>Producción y Consumo Responsables</li>
        <li>Acción por el Clima</li>
        <li>Vida Submarina</li>
        <li>Vida de Ecosistemas Terrestres</li>
        <li>Paz, Justicia e Instituciones Sólidas</li>
        <li>Alianzas para Lograr los Objetivos</li>
    </ul>

    <p>
        Su problema y su solución deben estar claramente vinculados a uno (o varios) de los objetivos. Involúcrense con los
        usuarios potenciales e involúcrenlos en el proceso. Demuestren que el problema es relevante y que la solución
        realmente resuelve el problema de manera sostenible. Observen cómo otros han intentado resolver el problema en el
        pasado y propongan un enfoque nuevo e innovador. Asegúrense de cumplir con los criterios éticos.
    </p>

    <h3>Requisitos del equipo de estudiantes</h3>
    <p>
        Los equipos deben estar compuestos por al menos dos y no más de cuatro estudiantes. No hay límite en la cantidad de
        equipos que pueden competir de una misma universidad u organización. Sin embargo, un estudiante no puede ser parte
        de múltiples equipos.
    </p>
    <p>
        Se invita a estudiantes de todas las etapas de su carrera universitaria, desde pregrado hasta posgrado, a
        participar. Si bien no es un requisito obligatorio, se recomienda encarecidamente que los equipos sean
        multidisciplinarios y/o multinacionales.
    </p>
    <p>
        La Competencia de Diseño para Estudiantes es para estudiantes. Envíen una prueba de su condición de estudiante
        enviando una nota firmada por su supervisor académico que verifique la siguiente información:
    </p>
    <ul>
        <li>Su universidad</li>
        <li>Si era estudiante de posgrado (es decir, a nivel de maestría o doctorado) o de pregrado (es decir, a nivel de
            licenciatura) cuando se realizó el trabajo, o confirme que está actualmente inscrito/a en un programa académico
            a tiempo completo o que volverá a ser estudiante en el próximo semestre.</li>
    </ul>

    <h3>Requisitos del equipo de supervisión</h3>

    <ul>
        <li>Grupos de hasta cuatro estudiantes con un supervisor.</li>
        <li>Cada equipo debe tener al menos dos estudiantes y un supervisor.</li>
        <li>Cada supervisor solo puede tener un equipo.</li>
        <li>El supervisor puede ser un profesor o un profesional de la industria.</li>
    </ul>

    <p>
        Los supervisores académicos, mentores, entrenadores o personas que brinden apoyo adicional no pueden ser
        copresidentes, revisores o jueces de la competencia al mismo tiempo. <span class="text-danger">Los mentores no
            pueden ser autores del artículo</span>.
    </p>

    <h3>Preparación de la Presentación y Estructura de la Competencia</h3>
    <p>Las presentaciones pueden ser en inglés, español o portugués.</p>

    <ol>
        <li>
            Envío para participar en la competencia, antes del 31 de julio
            <ul>
                <li>
                    <strong>Presentación en diapositivas</strong>: PDF de una presentación con un máximo de 15 diapositivas
                    (la primera diapositiva debe incluir el nombre de los estudiantes y el nombre del proyecto). La
                    presentación puede incluir información relevante del artículo (descripción del problema y la solución,
                    métodos de investigación y diseño, por qué su solución será utilizada por los usuarios potenciales).
                </li>
                <li>
                    <strong>Artículo</strong>: un informe escrito de hasta 6 páginas, incluyendo referencias (formato:
                    Plantillas de Envío de Artículos Maestros de ACM), el artículo debe incluir:
                    <ul>
                        <li>Una descripción clara del problema y la solución</li>
                        <li>Una visión general de los métodos de investigación y diseño</li>
                        <li>Las razones por las que su solución será utilizada por los usuarios potenciales</li>
                        <li>Reconocimiento de soluciones parciales o incompletas</li>
                        <li>Reconocimiento de cualquier ayuda externa recibida por parte del equipo de estudiantes (por
                            ejemplo, asesores, expertos en el campo, soluciones existentes, usuarios)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            Envío tras la aceptación en la competencia, antes del 25 de agosto
            <ul>
                <li>
                    <strong>Artículo</strong>: versión lista para su publicación (se proporcionarán instrucciones junto con
                    el correo electrónico de aceptación).
                </li>
                <li>
                    <strong>Video</strong>: ilustrando cómo su solución se adapta a la vida de los usuarios con ayuda de
                    escenarios, o aborda aspectos humanos de los objetivos de desarrollo sostenible elegidos. También puede
                    mostrar algunos detalles de la interfaz y la información presentada (máximo 5 minutos). El video puede
                    incluir:
                    <ul>
                        <li>Ejemplos de datos contextuales significativos y su análisis (investigación primaria, secundaria
                            o ambas)</li>
                        <li>
                            Fuentes clave de inspiración creativa (diseños y sistemas existentes)
                            <ul>
                                <li>Bosquejos de la solución en evolución</li>
                            </ul>
                        </li>
                        <li>Escenarios que representen cómo la solución se adapta a la vida de los usuarios y resuelve
                            problemas / involucra o entretiene a los usuarios</li>
                        <li>Detalles de la interfaz y el diseño de la información, cuando corresponda</li>
                        <li>Aspectos destacados de los resultados significativos de evaluación</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <p>
        Las presentaciones seleccionadas serán invitadas a mostrar su trabajo en la conferencia en una presentación final
        (en persona o virtual). Asimismo, todos los estudiantes (autores del artículo) deben registrarse para la
        conferencia, ya sea en persona o de manera virtual. Las presentaciones serán evaluadas por un panel de jueces y
        deben incluir:
    </p>

    <ul>
        <li>El proceso de diseño que se siguió</li>
        <li>Una descripción concisa de la solución propuesta</li>
        <li>Referencia a principios y teorías de diseño, cuando corresponda</li>
        <li>Reconocimiento de soluciones parciales o incompletas</li>
    </ul>

    <p>
        Todas las presentaciones deben incluir información de título y autor, incluidas las afiliaciones. Asegúrense de que
        las presentaciones no contengan material confidencial o protegido y no citen publicaciones confidenciales o
        protegidas.
    </p>

    <p>
        Los artículos aceptados pueden elegir uno de los siguientes medios de publicación:
    </p>

    <ul>
        <li>Actas de la conferencia publicadas en ACM DL. Solo las presentaciones en inglés pueden publicarse en este medio.
            Si su presentación fue aceptada en español o portugués y desea publicarla aquí, deberá traducir su presentación
            original al inglés.</li>
        <li>Avances en Interacción Humano-Computadora. Solo las presentaciones en español o inglés pueden publicarse en este
            medio. Si su presentación fue aceptada en portugués y desea publicarla aquí, deberá traducir su presentación
            original al español o inglés.</li>
    </ul>
    <h3 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/christian.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/christian.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Christian Sturm
                </template>
                <template #institution>
                    DE
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/iyubanit.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/iyubanit.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Iyubanit Rodriguez
                </template>
                <template #institution>
                    CR
                </template>
                <template #email>
                </template>
            </OrganizerItem>
    </div>

</div></template>