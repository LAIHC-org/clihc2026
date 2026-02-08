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
            O CLIHC 2026 é uma conferência distribuída com duas sedes presenciais:
            Aracaju, Brasil e Oaxaca, México. O programa é organizado com trilhas
            compartilhadas e atividades locais, combinando um núcleo acadêmico comum
            com a experiência de cada sede.
        </p>

        <h4 class="mt-4">Trilhas compartilhadas</h4>
        <p>
            Essas trilhas são coordenadas entre as duas sedes e formam a estrutura
            comum do CLIHC 2026:
        </p>
        <ul>
            <li>Artigos completos e curtos</li>
            <li>Pôsteres</li>
            <li>Workshops e tutoriais</li>
            <li>Competição de design estudantil</li>
            <li>Colóquio de pós-graduação</li>
        </ul>

        <h4 class="mt-4">Programa local</h4>
        <p>
            Cada sede agrega sessões locais, atividades convidadas e eventos de
            comunidade adaptados ao seu contexto. Isso inclui sessões locais de
            keynote, oportunidades de networking e atividades culturais.
        </p>

        <h4 class="mt-4">Como explorar o programa</h4>
        <p>
            Confira os detalhes de cada sede para ver datas, sessões e atividades
            locais:
        </p>
        <ul>
            <li>
                <a :href="scheduleHref('brazil')" class="uline">Programa no Brasil</a>
            </li>
            <li>
                <a :href="scheduleHref('mexico')" class="uline">Programa no México</a>
            </li>
        </ul>

        <p class="mt-4">
            A estrutura do programa pode ser atualizada à medida que a conferência se
            aproxima. Recomendamos revisar esta página regularmente.
        </p>
    </div>
</template>
