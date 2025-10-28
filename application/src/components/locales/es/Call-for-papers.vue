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
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>3 de julio PRORROGADA</del> <strong class="text-danger">Cerrada</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates'})" class="uline">
                Ver todas las fechas importantes
            </RouterLink>            
        </div>
        </li>
    </ol>

    <p>
        La XI Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC 2023) tiene como objetivo proporcionar un
        foro destacado que reúna a las comunidades de investigación latinoamericanas e internacionales de Interacción
        Humano-Computadora (HCI) para discutir y compartir ideas, métodos, enfoques y técnicas para el diseño,
        implementación y evaluación de experiencias interactivas de usuario. De acuerdo con ediciones anteriores, creemos
        que la HCI debe fomentar la producción de tecnología que pueda ser utilizada y beneficiar al mayor número posible de
        personas, facilitando el intercambio intercultural y la cooperación entre personas con diferentes antecedentes y
        necesidades.
    </p>

    <p>
        Este año, CLIHC 2023 se llevará a cabo en Puebla, México, y en línea, y está abierto a presentaciones en las
        siguientes categorías:
    </p>

    <ul>
        <li>Artículo completo</li>
        <li>Artículo corto</li>
    </ul>

    <p>
        Se invita a los autores a preparar y enviar artículos que informen sobre proyectos de investigación, diseños
        innovadores, estudios de usuarios, modelos de interacción, estudios de campo, estudios de caso y otros. Se anima a
        académicos, investigadores, profesionales de la industria, así como a estudiantes de pregrado y posgrado a
        participar en la selección revisada por pares de los trabajos que se presentarán en la conferencia o en línea, del
        30 de octubre al 1 de noviembre de 2023.
    </p>

    <p>Los temas de las presentaciones pueden abarcar todos los aspectos de la HCI, incluyendo, pero no limitándose a:</p>

    <ol>
        <li>Computación afectiva</li>
        <li>Interacción cerebro-computadora (BCI)</li>
        <li>CSCW y computación social</li>
        <li>Métodos de diseño</li>
        <li>Educación e HCI</li>
        <li>Interacción encarnada</li>
        <li>HCI para el desarrollo (HCI4D)</li>
        <li>Salud y HCI</li>
        <li>Inclusión y accesibilidad</li>
        <li>Interfaces de usuario innovadoras</li>
        <li>Interfaces e interacción en juegos</li>
        <li>Computación móvil</li>
        <li>Percepción y visualización</li>
        <li>Interacción humano-robot y telepresencia</li>
        <li>Experiencia del usuario (UX) y usabilidad</li>
    </ol>

    <h3>Envío y Fechas Importantes</h3>
    <p>
        Todos los manuscritos deben enviarse completamente anonimizados (para anonimizar su artículo, considere las <a
            href="https://chi2021.acm.org/for-authors/presenting/papers/chi-anonymization-policy" class="uline">pautas
            proporcionadas por CHI</a>). Por favor, tenga en cuenta una audiencia internacional: evite términos locales y
        utilice el sistema internacional de unidades. Además, considere seguir las <a
            href="./accessibility-recommendations-for-authors" class="uline">recomendaciones de accesibilidad</a>.
    </p>

    <h4 id="cpf-dates">Fechas Importantes (artículos completos y cortos)</h4>
    <ul>
        <li>Envío de resúmenes: <del>12 de junio</del> <strong class="text-danger">26 de junio PRORROGADA</strong></li>
        <li>Envío de artículos: <del>19 de junio</del> <strong class="text-danger">3 de julio PRORROGADA</strong></li>
        <li>Notificación: 31 de julio</li>
        <li>Versión final: 25 de agosto</li>
        <li>Evento: 30 y 31 de octubre, 1 de noviembre</li>
    </ul>
    <p>Los plazos son a medianoche AoE (Anywhere on Earth).</p>

    <h3>Código de Ética</h3>
    <p>
        Nos adherimos al <a href="https://www.acm.org/code-of-ethics" class="uline">Código de Ética de ACM</a>. Esperamos
        que todas las presentaciones, la investigación subyacente y el comportamiento durante el proceso de revisión y la
        conferencia cumplan con los principios y responsabilidades establecidos en el código.
    </p>

    <h3>Proceso de Envío</h3>
    <p>
        Las presentaciones de ponencias completas y cortas se realizarán a través del <a
            href="https://easychair.org/conferences/?conf=clihc2023" class="uline">Sistema de Conferencias EasyChair</a>.
    </p>

    <p>
        El formato de envío a utilizar para cada categoría seguirá el <a
            href="https://www.acm.org/publications/proceedings-template" class="uline">nuevo formato de artículo maestro de
            ACM</a>. Los autores pueden elegir trabajar en uno de los siguientes formatos:
    </p>

    <ul>
        <li>Microsoft Word</li>
        <li>LaTeX (recomendado)</li>
    </ul>

    <h3>Categorías de Envío</h3>

    <h4>Artículos Completos (10 páginas)</h4>
    <p>
        Los proyectos de investigación que han alcanzado una etapa madura y presentan una contribución original al estado
        del arte son bienvenidos a presentarse en la categoría de ponencias completas. Las presentaciones deben ser
        relevantes para el tema de la conferencia y no pueden haber sido publicadas ni estar en revisión en ninguna otra
        conferencia o revista. La longitud máxima para las ponencias completas es de 10 páginas, incluyendo referencias, y
        los artículos deben estar escritos en inglés, portugués o español.
    </p>

    <h4>Artículos Cortos (4 páginas)</h4>
    <p>
        Los proyectos de investigación que deseen informar sobre resultados preliminares, parciales o complementarios
        originales pueden enviar sus artículos a la categoría de ponencias cortas, que tiene una longitud máxima de 4
        páginas, incluyendo referencias. Los artículos enviados deben estar escritos en inglés, portugués y español. El
        contenido debe ser relevante para la conferencia y no debe haber sido publicado ni estar en proceso de revisión en
        ninguna otra conferencia o revista.
    </p>

    <p>
        Los artículos serán revisados por al menos dos revisores en un proceso de doble ciego. Tenga en cuenta que los
        artículos enviados deben ser anonimizados, incluyendo referencias al trabajo previo de los autores.
    </p>

    <p>
        Estamos trabajando para asegurar que los artículos aceptados se publiquen en la Biblioteca Digital de ACM. Además,
        los mejores artículos serán recomendados para presentar una versión extendida y ser publicados en un libro de
        edición especial de la prestigiosa serie de Interacción Humano-Computadora (<a
            href="https://www.springer.com/series/6033" class="uline">Human–Computer Interaction Series</a>), publicado por
        Springer y regularmente indexado en la lista maestra de libros de la Web of Science.
    </p>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/pablo.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/pablo.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Pablo Torres
                </template>
                <template #institution>
                    UTPL, EC
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/vanessa.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/vanessa.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Vanessa Agredo Delgado
                </template>
                <template #institution>
                    FUNAD, CO
                </template>
                <template #email>
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>