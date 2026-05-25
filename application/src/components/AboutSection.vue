<script>
import Tr from '@/i18n/translation'

export default {
	methods: {
		registrationHref(venue) {
			return `https://${venue}.clihc2026.laihc.org/${Tr.currentLocale}/registration`
		}
	},
	setup() {
		return { Tr }
	}
}
</script>

<template>
	<section class="">
		<div class="container">
			<div class="row">
				<div class="row justify-content-center my-3">
					<div class="col-lg-8">
						<!-- <h2 class="text-dark mb-0">Titulo Negro</h2> -->
						<h2 id="about_clihc" class="text-primary text-gradient text-center">{{ $t("about.about_title") }}</h2>
						<div v-html="$t('about.about_text')"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="row justify-content-center my-3">
					<div class="col-lg-6">
						<!-- <h2 class="text-dark mb-0">Titulo Negro</h2> -->

						<table class="table table-striped">
							<tbody>
								<tr>
									<th scope="row">{{ $t("about.call") }}</th>
									<td>
										<RouterLink
											:to="
												Tr.i18nRoute({
													name: 'call-for-participation',
												})
											"
											class="ulink"
										>
											<strong>{{ $t("about.closed") }}</strong>
										</RouterLink>
									</td>
								</tr>
								<tr>
									<th scope="row">{{ $t("about.registration") }}</th>
									<td>
										<a :href="registrationHref('brazil')" class="ulink me-3">
											<strong>BR:</strong> {{ $t("about.closed") }}
										</a>
										<a :href="registrationHref('mexico')" class="ulink">
											<strong>MX:</strong> {{ $t("about.open") }}
										</a>
									</td>
								</tr>
								<tr>
									<th scope="row">{{ $t("about.proceedings") }}</th>
									<td>{{ $t("nav.pending") }}</td>
								</tr>
								<!--
								<tr>
									<th scope="row">Video archives</th>
									<td>Pending</td>
								</tr>
								-->
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
