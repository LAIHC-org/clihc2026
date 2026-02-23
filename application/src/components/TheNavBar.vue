<script>
	import { onBeforeUnmount, onMounted } from 'vue'
	import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
	import Tr from '@/i18n/translation'
	import { RouterLink } from 'vue-router';

	export default {
		components: { LanguageSwitcher, RouterLink },
		setup() {
			let onScroll = null

			onMounted(() => {
				const nav = document.querySelector('.navbar-color-on-scroll')
				const icon = document.querySelector('.icon-language')

				onScroll = () => {
					if (!nav) return
					const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
					const isScrolled = scrollTop >= 200
					nav.classList.toggle('scrolled', isScrolled)
					if (icon) {
						icon.classList.toggle('text-white', isScrolled)
					}
				}

				window.addEventListener('scroll', onScroll, { passive: true })
				onScroll()
			})

			onBeforeUnmount(() => {
				if (onScroll) {
					window.removeEventListener('scroll', onScroll)
				}
			})

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
		}
	}
</script>

<template>
	<!-- Navbar -->
	<div class="container position-sticky z-index-sticky top-0">
		<div class="row">
			<div class="col-12">
				<nav class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4 navbar-color-on-scroll justify-content-between">
					<div class="container-fluid">
						<RouterLink class="navbar-brand font-weight-bolder ms-sm-3" :to="Tr.i18nRoute({ name: 'home'})" rel="tooltip"
							title="XII Latin American Conference on Human-Computer Interaction" data-placement="bottom"
							tabindex="0">
							<img src="/assets/img/logos/clihc2023.svg" height="25" alt="CLIHC Logo">
							CLIHC 2026
						</RouterLink>
						<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
							data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon mt-2">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
							</span>
						</button>
						<div class="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
							<ul class="navbar-nav navbar-nav-hover w-100">

								<li class="nav-item dropdown dropdown-hover mx-2">
									<RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })"
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
										aria-expanded="false" aria-haspopup="true"
									>
										{{ $t("nav.for_authors") }}
										&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" aria-hidden="true" focusable="false"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
									</RouterLink>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown1">
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.cfp") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.cfp_message") }}
														</span>
													</div>
												</div>
											</RouterLink>											
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.csp") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.csp_message") }}
														</span>
													</div>
												</div>
											</RouterLink>											
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.cpt") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.cpt_message") }}
														</span>
													</div>
												</div>
											</RouterLink>											
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.cwt") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.cwt_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.sdc") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.sdc_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.cgc") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.cgc_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										<li>
											<RouterLink
												:to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })"
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
														>
															{{ $t("nav.accessibility_for_autors") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("nav.accessibility_for_autors_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown dropdown-hover mx-2">
									<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })"
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										id="navbarDropdown2" role="button" data-bs-toggle="dropdown"
										aria-expanded="false" aria-haspopup="true">
										{{ $t("nav.for_attendees") }} 
										&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" aria-hidden="true" focusable="false"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
									</RouterLink>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown2">
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" 
												class="dropdown-item border-radius-md"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.getting_started") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
												class="dropdown-item border-radius-md"
											>											
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.rates_and_registration") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown dropdown-hover mx-2">
									<RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" 
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										id="navbarDropdown3" 
										role="button" 
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{ $t("nav.program") }}
										&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
									</RouterLink>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown3">
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'program-structure' })" class="dropdown-item border-radius-md">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.program_structure") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										<li>
											<a :href="scheduleHref('brazil')" class="dropdown-item border-radius-md">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.program_brazil") }}
														</span>
													</div>
												</div>												
											</a>
										</li>
										<li>
											<a :href="scheduleHref('mexico')" class="dropdown-item border-radius-md">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.program_mexico") }}
														</span>
													</div>
												</div>												
											</a>
										</li>
									</ul>
								</li>
								<li class="nav-item mx-2">
									<RouterLink :to="Tr.i18nRoute({ name: 'organizers'})" 
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
									>{{ $t("nav.organizers") }}</RouterLink>
								</li>
								<li class="nav-item dropdown dropdown-hover mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#"
										id="navbarDropdown4"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{ $t("nav.choose_venue") }}
										&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
									</a>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown4">
										<li>
											<a class="dropdown-item border-radius-md" :href="venueHref('brazil')">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.venue_brazil") }}
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md" :href="venueHref('mexico')">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.venue_mexico") }}
														</span>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</li>
								<!--
								<li class="nav-item mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										href="./video-archives">
										Video archives
									</a>
								</li>
								-->
							</ul>
							<LanguageSwitcher/>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<!-- End Navbar -->
</template>
