<script>

	import Tr from '@/i18n/translation'

	export default {
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
						<p>
							{{ $t("about.about_text") }}
						</p>
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
									<th scope="row">
										<RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation'})" class="uline">
											{{ $t("about.call") }}
										</RouterLink>								
									</th>
									<td><span class="text-bold">{{ $t("about.closed") }}</span></td>
								</tr>
								<tr>
									<th scope="row">
										<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" 
												class="uline"
											>
											{{ $t("about.registration") }}
										</RouterLink>										
									</th>
									<td><span class="text-bold text-primary text-gradient">{{ $t("about.open") }}</span></td>
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