<script>
import Tr from "@/i18n/translation";

export default {
    setup() {
        const scheduleHref = (venue) => {
            const base =
                venue === "brazil"
                    ? "https://brazil.clihc2026.laihc.org"
                    : "https://mexico.clihc2026.laihc.org";
            return `${base}/${Tr.currentLocale}/schedule`;
        };

        return {
            scheduleHref,
        };
    },
};
</script>

<template>
    <div>
        <p>
            CLIHC 2026 es una conferencia distribuida con dos sedes presenciales:
            Aracaju, Brasil y Oaxaca, México. El programa se organiza con tracks
            compartidos y actividades locales, para combinar un núcleo académico común
            con la experiencia de cada sede.
        </p>

        <h4 class="mt-4">Tracks compartidos</h4>
        <p>
            Estos tracks se coordinan entre ambas sedes y forman la estructura común de
            CLIHC 2026:
        </p>
        <ul>
            <li>Artículos completos y cortos</li>
            <li>Pósteres</li>
            <li>Talleres y tutoriales</li>
            <li>Competencia de diseño estudiantil</li>
            <li>Coloquio de posgrado</li>
        </ul>

        <h4 class="mt-4">Programa local</h4>
        <p>
            Cada sede suma sesiones locales, actividades invitadas y eventos de
            comunidad adaptados a su contexto. Esto incluye sesiones de keynote
            locales, espacios de networking y actividades culturales.
        </p>

        <h4 class="mt-4">Cómo explorar el programa</h4>
        <p>
            Revisa el detalle de cada sede para conocer fechas, sesiones y actividades
            locales:
        </p>
        <ul>
            <li>
                <a :href="scheduleHref('brazil')" class="uline">Programa en Brasil</a>
            </li>
            <li>
                <a :href="scheduleHref('mexico')" class="uline">Programa en México</a>
            </li>
        </ul>

        <p class="mt-4">
            La estructura del programa puede actualizarse conforme se acerque la
            conferencia. Te recomendamos revisar esta página regularmente.
        </p>
    </div>
</template>
