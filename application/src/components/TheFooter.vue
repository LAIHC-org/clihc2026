<script>

	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <footer class="footer pt-3 mt-5">
        <hr class="horizontal dark mb-5">
        <div class="container">
            <div class=" row">
                <div class="col-md-3 mb-4 ms-auto">
                    <div>
                        <h2 class="text-gradient text-primary font-weight-bolder fs-5">{{ $t("nav.sitemap") }}</h2>
                    </div>
                    <div>
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.facebook.com/clihc" target="_blank">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.facebook") }}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://twitter.com/clihc2023" target="_blank">
                                    <i class="fab fa-twitter text-lg opacity-8"></i>
                                    <span class="sr-only">{{ $t("nav.twitter") }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.about_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'home', hash: '#about_clihc'})" class="nav-link uline">
                                    {{ $t("nav.about") }}
                                </RouterLink>
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers'})" class="nav-link uline">
                                    {{ $t("nav.organizers") }}
                                </RouterLink>                                
                            </li>                            
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'keynote-speakers' })">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                            <!--
                            <li class="nav-item">
                                <a class="nav-link uline" href="./video-archives">
                                    Video archives
                                </a>
                            </li>
                            -->                          
                        </ul>
                    </div>
                </div>
                
                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.for_authors_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="nav-link uline">
                                    {{ $t("nav.cfp") }}
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
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors'})" class="nav-link uline">
                                    {{ $t("nav.accessibility_for_autors") }}
                                </RouterLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-primary text-sm">{{ $t("nav.for_attendees_title") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>                      
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                            <!--
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-FAQ' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.accessibility_faqs") }}
                                </RouterLink>
                            </li>
                            -->                                                        
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'accepted-papers' })">
                                    {{ $t("nav.accepted_papers") }}
                                </RouterLink>
                            </li>                            
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.schedule") }}
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
                            <a class="uline" href="CHANGELOG.md">v2023.1.0.13</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>