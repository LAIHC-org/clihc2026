<script>
import OrganizerItem from "@/components/OrganizerItem.vue";

import Tr from "@/i18n/translation";

export default {
    components: {
        OrganizerItem,
    },
    setup() {
        return {
            Tr,
        };
    },
};
</script>

<template>
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <strong class="text-primary text-gradient">Extensión de la fecha límite de envío:</strong>
                <strong class="text-danger"> 28 de marzo de 2026</strong><br />
                Extendido desde el 14 de marzo de 2026.<br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' })"
                    class="uline"
                >
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        CLIHC 2026 es la conferencia bienal que busca reunir a la comunidad
        latinoamericana de IHC. El Coloquio de Posgrado brinda una oportunidad para que
        estudiantes de posgrado de América Latina que trabajan en IHC y áreas afines
        exploren y desarrollen sus intereses de investigación mediante un taller
        interdisciplinario bajo la guía de un panel de investigadores destacados.
    </p>

    <p>
        Invitamos a estudiantes de posgrado que consideren que se beneficiarían de este
        tipo de retroalimentación sobre su trabajo de tesis a postularse a esta
        oportunidad única para compartir su investigación con otros estudiantes y
        investigadores senior en el área. Los postulantes seleccionados serán quienes
        muestren un tema y un enfoque de investigación claros y hayan avanzado, pero no
        tan lejos como para que ya no puedan hacer cambios en su plan.
    </p>

    <p>
        Además de indicar cómo te beneficiarás de la participación, tanto tú como tu
        director(a) deben tener claro qué puedes aportar al Coloquio de Posgrado. Ser
        aceptado en el Coloquio implica un compromiso para dar y recibir comentarios
        reflexivos con miras a fortalecer la IHC en América Latina y a los demás
        participantes en sus respectivos campos.
    </p>

    <h3>Objetivos</h3>
    <ul>
        <li>
            Ofrecer a estudiantes de posgrado en IHC de América Latina la oportunidad de
            compartir y discutir su trabajo con investigadores experimentados.
        </li>
        <li>
            Brindar retroalimentación sobre la investigación actual de los estudiantes y
            orientación sobre futuras líneas de investigación.
        </li>
        <li>
            Ofrecer a cada estudiante comentarios y nuevas perspectivas sobre su trabajo
            por parte de investigadores y estudiantes de otras instituciones.
        </li>
        <li>
            Promover el desarrollo de una comunidad de apoyo entre académicos y un
            espíritu de investigación colaborativa entre estudiantes de posgrado de
            universidades latinoamericanas.
        </li>
        <li>
            Permitir que la comunidad conozca proyectos de investigación desarrollados
            por estudiantes de posgrado.
        </li>
    </ul>

    <h3>Durante el Coloquio de Posgrado</h3>
    <p>
        Los estudiantes aceptados presentarán su trabajo al grupo, con tiempo suficiente
        para discusión y preguntas de investigadores participantes y otros asistentes.
        Las instrucciones detalladas se proporcionarán al momento de la aceptación. Se
        espera asistencia presencial para esta pista.
    </p>

    <h3>Envíos</h3>
    <p>
        La propuesta debe tener los siguientes cuatro componentes, todos escritos en
        inglés, portugués o español.
    </p>

    <ul>
        <li>
            Resumen extendido: una descripción de investigación de 4 páginas (incluidas
            las referencias) que cubra aspectos centrales de tu trabajo de posgrado. Este
            documento debe seguir la última versión de la plantilla de la Sociedad
            Brasileña de Computación: los autores pueden elegir trabajar en uno de los
            siguientes formatos: Microsoft Word / LaTeX (recomendado) u Overleaf. Los
            puntos clave de este documento incluyen:
            <ul>
                <li>
                    Tu situación, es decir, el contexto del programa de posgrado en el
                    que se desarrolla tu trabajo (institución de origen, país, programa,
                    año de estudio, etc.).
                </li>
                <li>Contexto y motivación que impulsan tu investigación.</li>
                <li>Objetivos / metas / preguntas de investigación.</li>
                <li>
                    Antecedentes/revisión de literatura de trabajos clave que enmarcan tu
                    investigación.
                </li>
                <li>
                    Hipótesis/tesis, pregunta de investigación y/o planteamiento del
                    problema.
                </li>
                <li>
                    Enfoque y métodos de investigación seguidos, incluyendo la
                    justificación relevante.
                </li>
                <li>Resultados a la fecha y su validez.</li>
                <li>
                    Estado de la tesis y próximos pasos (es decir, lo que has hecho y lo
                    que falta por hacer).
                </li>
                <li>Contribuciones actuales y esperadas.</li>
            </ul>
        </li>
        <li>
            Un párrafo con los beneficios esperados de la participación tanto para ti
            como para los demás participantes del coloquio (es decir, lo que aportarás y
            lo que obtendrás) (máx. 1 página).
        </li>
        <li>
            Una carta de nominación de tu director(a) principal de tesis/proyecto final
            que aborde el valor que tendría el Coloquio de Posgrado para ti, la
            contribución que probablemente harás al evento y por qué este es un buen
            momento para participar (máx. 1 página).
        </li>
        <li>
            Una versión concisa de tu Currículum Vitae actual, enfatizando formación
            académica, trayectoria de investigación y publicaciones relevantes (si las
            hay) (1-2 páginas).
        </li>
        <li>
            Envía tu propuesta como un único archivo PDF a través de la plataforma JEMS,
            en la pista del Coloquio de Posgrado antes de la fecha límite:
            <a href="https://jems3.sbc.org.br/events/" class="uline"
                >https://jems3.sbc.org.br/events/</a
            >
        </li>
    </ul>

    <p>
        Las propuestas aceptadas se publicarán en la biblioteca digital SBC-OpenLib
        (SOL): <a href="https://sol.sbc.org.br/" class="uline">https://sol.sbc.org.br/</a>
    </p>

    <h3>Proceso de selección</h3>
    <p>
        La revisión y decisión de aceptación equilibrarán muchos factores. Esto incluye
        la calidad de tu propuesta y tu situación actual en el programa de posgrado. Los
        candidatos con una idea claramente desarrollada, que sean considerados
        formalmente por su institución como trabajando en su tesis o proyecto final y
        que aún tengan tiempo para ser influenciados por la participación en el
        Coloquio, recibirán la consideración más fuerte.
    </p>
    <p>
        Además de evaluar la calidad de la investigación, el proceso de selección
        también considerará otros factores. El objetivo es identificar un grupo de
        estudiantes que se beneficiarán significativamente del Coloquio y se apoyarán
        entre sí en su crecimiento. Como grupo, los candidatos aceptados exhibirán una
        diversidad de antecedentes y temas.
    </p>

    <h3 id="cgc-dates">Fechas importantes (CG)</h3>
    <ul>
        <li>Extensión de la fecha límite de envío del CG: del 14 de marzo de 2026 al 28 de marzo de 2026</li>
        <li>Notificación: 30 de marzo de 2026</li>
        <li>Envío de versión final: 12 de abril de 2026</li>
        <li>Coloquio de Posgrado: Por determinar, en mayo de 2026</li>
    </ul>

    <h3 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/robertoPereira.png"
                            alt="Roberto Pereira"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/robertoPereira.png');"
                    ></div>
                </template>
                <template #name> Dr. Roberto Pereira </template>
                <template #institution> UFPR, BR </template>
                <template #email> </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/claudiaLopez.png"
                            alt="Claudia López Moncada"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/claudiaLopez.png')"
                    ></div>
                </template>
                <template #name> Dra. Claudia López Moncada </template>
                <template #institution>
                    Universidad Técnica Federico Santa María (UTFSM), CL
                </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>
</template>
