<script>

	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		},
        methods: {
            scheduleHref(venue) {
                const base =
                    venue === "brazil"
                        ? "https://brazil.clihc2026.laihc.org"
                        : "https://mexico.clihc2026.laihc.org";
                return `${base}/${Tr.currentLocale}/schedule`;
            },
            venueHref(venue) {
                return venue === "brazil"
                    ? "https://brazil.clihc2026.laihc.org"
                    : "https://mexico.clihc2026.laihc.org";
            },
        },
	}
</script>

<template>
    <footer class="footer pt-3 mt-5">
        <div class="container mt-3">
            <div class="row g-4">
                <div class="col-6 col-md-2 col-lg-2 mb-4">                    
                    <div>
                        <h2 class="text-gradient text-secondary font-weight-bolder fs-5">{{ $t("nav.sitemap") }}</h2>
                    </div>
                    <div>
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.facebook.com/clihc" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                    <span class="visually-hidden">{{ $t("nav.facebook") }}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://x.com/clihc2026" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-x-twitter text-lg opacity-8"></i>
                                    <span class="visually-hidden">{{ $t("nav.twitter") }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://www.laihc.org/"><img src="/assets/img/logos/laihc-blanco.svg" alt="LaIHC" class="mt-2" height="50" /></a>
                </div>
                
                <div class="col-6 col-md-3 col-lg-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.for_authors_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="nav-link uline">
                                    {{ $t("nav.cfp") }}
                                </RouterLink>
                            </li>                            
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers' })" class="nav-link uline">
                                    {{ $t("nav.csp") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" class="nav-link uline">
                                    {{ $t("nav.cpt") }}
                                </RouterLink>                                
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })" class="nav-link uline">
                                    {{ $t("nav.cwt") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="nav-link uline">
                                    {{ $t("nav.sdc") }}
                                </RouterLink>
                            </li> 
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="nav-link uline">
                                    {{ $t("nav.cgc") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-6 col-md-2 col-lg-2 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.for_attendees_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="nav-link uline">
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>                      
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="nav-link uline">
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 col-lg-2 mb-1">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.choose_venue") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a :href="venueHref('brazil')" class="nav-link uline">
                                    {{ $t("nav.venue_brazil") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a :href="venueHref('mexico')" class="nav-link uline">
                                    {{ $t("nav.venue_mexico") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-3 col-lg-3 mb-1">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.program") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'program-structure' })" class="nav-link uline">
                                    {{ $t("nav.program_structure") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <a :href="scheduleHref('brazil')" class="nav-link uline">
                                    {{ $t("nav.program_brazil") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a :href="scheduleHref('mexico')" class="nav-link uline">
                                    {{ $t("nav.program_mexico") }}
                                </a>
                            </li>
                        </ul>
                        <h3 class="text-gradient text-secondary text-sm mt-3">{{ $t("nav.organizers") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers'})" class="nav-link uline">
                                    {{ $t("nav.organizers") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 my-4">
                    <div class="text-center">
                        <p class="my-0 text-sm">
                            {{ $t("nav.copyright") }}
                        </p>
                        <p class="my-0  text-sm">
                            <a class="uline" href="CHANGELOG.md">v2026.2.0.2</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
