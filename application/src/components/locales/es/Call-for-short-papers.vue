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
                <strong class="text-primary text-gradient">Envío de resúmenes:</strong>
                <strong class="text-danger"> 2 de marzo, 2026</strong><br />
                <strong class="text-primary text-gradient">Envío de artículos:</strong>
                <strong class="text-danger"> 9 de marzo, 2026</strong><br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-dates' })"
                    class="uline"
                >
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p id="csp-call">
        Convocatoria de Artículos Cortos
    </p>

    <h3>Presentación</h3>
    <p>
        La Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC 2026) invita a enviar
        Artículos Cortos con contribuciones originales e inéditas en todas las áreas de Interacción Humano-Computadora (HCI).
        Los Artículos Cortos ofrecen la oportunidad de reportar investigación en etapas iniciales con potencial, ideas
        innovadoras, contribuciones metodológicas, exploraciones de diseño o resultados parciales que sean claramente
        relevantes para la comunidad de HCI.
    </p>
    <p>
        Este año, CLIHC 2026 se realizará en dos ciudades, Aracaju/Brasil y Oaxaca/México. Las presentaciones de Artículos
        Cortos se llevarán a cabo en ambas sedes, Brasil y México.
    </p>
    <p>
        CLIHC es el principal foro para la difusión de investigación en HCI en América Latina y da la bienvenida a
        contribuciones que reflejen la diversidad, creatividad y relevancia social de la investigación en la región y más allá.
    </p>

    <h3>Alcance y temas de interés</h3>
    <p>
        La pista de Artículos Cortos en CLIHC 2026 sigue el mismo alcance temático que la pista de Artículos Completos y
        acepta contribuciones sobre cualquier tema dentro del amplio campo de la Interacción Humano-Computadora (HCI).
        Los Artículos Cortos son especialmente adecuados para ideas emergentes, investigación en etapas tempranas,
        exploraciones de diseño novedosas o contribuciones metodológicas enfocadas que quizá aún no justifican un artículo
        completo, pero que son de claro interés para la comunidad de HCI.
    </p>
    <p>Los temas de interés incluyen, pero no se limitan a:</p>
    <ul>
        <li>Interacción Cerebro–Computadora (BCI)</li>
        <li>Trabajo Cooperativo Asistido por Computadora (CSCW) y Computación Social</li>
        <li>Métodos de Diseño</li>
        <li>Educación y HCI</li>
        <li>HCI para el Desarrollo (HCI4D)</li>
        <li>Salud y HCI</li>
        <li>HCI e Inteligencia Artificial</li>
        <li>Inclusión y Accesibilidad</li>
        <li>Interfaces de Usuario Innovadoras</li>
        <li>Evaluación de la Interacción</li>
        <li>Juegos e Interacción</li>
        <li>Computación Móvil</li>
        <li>Visualización y Percepción</li>
        <li>Interacción Humano–Robot y Telepresencia</li>
        <li>Experiencia de Usuario (UX) y Usabilidad</li>
        <li>Propiedad Intelectual y HCI</li>
    </ul>
    <p>
        Se alientan especialmente contribuciones interdisciplinarias, aplicadas y sensibles al contexto, particularmente
        aquellas que reflejen perspectivas latinoamericanas.
    </p>

    <h3>Formato y extensión de la propuesta</h3>
    <p>Los Artículos Cortos deben seguir las siguientes directrices:</p>
    <ul>
        <li>Extensión máxima: cinco (5) páginas, incluyendo referencias</li>
        <li>Idiomas aceptados: inglés, portugués o español</li>
        <li>Formato: las propuestas deben seguir la plantilla de la Sociedad Brasileña de Computación (SBC)</li>
        <li>Microsoft Word o LaTeX (recomendado)</li>
        <li>Overleaf</li>
        <li>Todas las propuestas deben enviarse en formato PDF</li>
    </ul>

    <h3>Anonimato y accesibilidad</h3>
    <p>Los Artículos Cortos deben estar completamente anonimizados para revisión doble ciego:</p>
    <ul>
        <li>Los autores deben eliminar nombres y afiliaciones del manuscrito</li>
        <li>Las auto-referencias deben omitirse o anonimizarse</li>
        <li>Evitar terminología demasiado local o específica de instituciones; los envíos deben dirigirse a una audiencia internacional</li>
        <li>
            Se recomienda fuertemente seguir las Guías de Accesibilidad de CLIHC 2023, para garantizar que los envíos
            sean accesibles a revisores y lectores
        </li>
    </ul>

    <h3>Sistema de envío</h3>
    <p>
        Todos los envíos de Artículos Cortos deben realizarse a través de JEMS3 – Journal and Event Management System:
        <a href="https://jems3.sbc.org.br/events/535" class="uline">https://jems3.sbc.org.br/events/535</a>
    </p>

    <h3 id="csp-dates">Fechas importantes</h3>
    <p>Todas las fechas límite son Anywhere on Earth (AoE), 23:59 hrs.</p>
    <ul>
        <li>Fecha límite para envío de resúmenes: 2 de marzo, 2026</li>
        <li>Fecha límite para envío de artículos: <strong class="text-danger">9 de marzo, 2026</strong></li>
        <li>Notificación de aceptación: 30 de marzo, 2026</li>
        <li>Fecha límite de versión final (camera ready): 12 de abril, 2026</li>
        <li>Fechas de la conferencia: 6–8 de mayo, 2026</li>
    </ul>

    <h3>Proceso de revisión</h3>
    <p>
        El proceso de revisión de Artículos Cortos sigue el de los Artículos Completos y está diseñado para garantizar
        equidad, rigor y retroalimentación constructiva. Cada Artículo Corto será revisado por al menos dos miembros del
        Comité de Programa bajo un proceso de revisión por pares doble ciego. Las propuestas se evaluarán según los
        siguientes criterios:
    </p>
    <ul>
        <li>Relevancia para la Interacción Humano-Computadora y para CLIHC</li>
        <li>Claridad del problema de investigación, desafío de diseño o contribución</li>
        <li>Originalidad e impacto potencial</li>
        <li>Adecuación metodológica respecto a la etapa del trabajo</li>
        <li>Calidad de la escritura, la estructura y la argumentación</li>
    </ul>
    <p>
        Si bien no se espera que los Artículos Cortos reporten resultados completos o finales, deben demostrar una
        metodología sólida, una clara posición dentro del trabajo relacionado y una contribución potencial bien articulada
        al campo de HCI.
    </p>

    <h3>¿Por qué enviar un Artículo Corto?</h3>
    <p>La pista de Artículos Cortos ofrece una excelente oportunidad para:</p>
    <ul>
        <li>Presentar investigación en etapas tempranas o en curso y recibir retroalimentación de la comunidad de HCI</li>
        <li>Compartir ideas novedosas, conceptos de diseño o enfoques metodológicos que aún no están completamente maduros</li>
        <li>Reportar resultados parciales, estudios piloto o hallazgos exploratorios</li>
        <li>Involucrar a estudiantes de posgrado e investigadores en etapas tempranas en un espacio académico internacional</li>
        <li>Fomentar la discusión sobre temas emergentes y desafíos regionales en HCI</li>
    </ul>
    <p>
        Los Artículos Cortos son parte integral de CLIHC, promoviendo el diálogo, la visibilidad y la colaboración entre
        diversas tradiciones de investigación.
    </p>

    <h3>Publicación y presentación</h3>
    <p>
        Los Artículos Cortos aceptados se incluirán en las actas de la conferencia y se presentarán en CLIHC 2026.
        Al menos un autor de cada artículo aceptado debe registrarse en la conferencia y presentar el trabajo.
    </p>

    <p>Esperamos sus contribuciones y darles la bienvenida a CLIHC 2026.</p>

    <h3 class="my-4">{{ $t("organizers.short_papers_cahirs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/valeria.jpg"
                            alt="Valeria"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/valeria.jpg')"
                    ></div>
                </template>
                <template #name> Dra. Valéria Argôlo Rosa de Queiroz </template>
                <template #institution>
                    Universidade Estadual do Sudoeste da Bahia (UESB), BR
                </template>
                <template #email> </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/marioMoreno.png"
                            alt="Mario Moreno"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/marioMoreno.png')"
                    ></div>
                </template>
                <template #name> Dr. Mario A. Moreno Rocha </template>
                <template #institution>
                    Universidad Tecnológica de la Mixteca (UTM), MX
                </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>
</template>
