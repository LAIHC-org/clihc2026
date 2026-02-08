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
            CLIHC 2026 is a distributed conference with two in-person venues: Aracaju,
            Brazil and Oaxaca, Mexico. The program is built around shared tracks and
            local activities, so participants can engage with a common academic core
            while also experiencing each venue’s local program.
        </p>

        <h4 class="mt-4">Shared Tracks</h4>
        <p>
            These tracks are coordinated across both venues and make up the common
            structure of CLIHC 2026:
        </p>
        <ul>
            <li>Full and short papers</li>
            <li>Posters</li>
            <li>Workshops and tutorials</li>
            <li>Student design competition</li>
            <li>Graduate colloquium</li>
        </ul>

        <h4 class="mt-4">Local Program</h4>
        <p>
            Each venue adds local sessions, invited activities, and community events
            tailored to its context. This includes local keynote sessions, networking
            opportunities, and cultural activities.
        </p>

        <h4 class="mt-4">How To Explore The Program</h4>
        <p>
            Review the detailed schedules for each venue to see dates, sessions, and
            local activities:
        </p>
        <ul>
            <li>
                <a :href="scheduleHref('brazil')" class="uline">Program in Brazil</a>
            </li>
            <li>
                <a :href="scheduleHref('mexico')" class="uline">Program in Mexico</a>
            </li>
        </ul>

        <p class="mt-4">
            The program structure may be updated as the conference approaches. Please
            check back for the latest details.
        </p>
    </div>
</template>
