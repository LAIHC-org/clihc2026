<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		return { Tr }
	}
}
</script>

<template>
	<p>
		Welcome to the XI Latin American Conference on Human-Computer Interaction (CLIHC 2023). We are pleased to welcome
		you to this outstanding event that brings together research communities in HCI from Latin America and around the
		world. This "Getting Started" page is designed to provide essential information for your participation in the
		conference.
	</p>

	<ol class="list-group list-group-numbered">
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })"
						class="uline">
						Registration and Payment:
					</RouterLink>
				</div>
				Get information on how to register and pay, ensuring your attendance at CLIHC 2023, with instructions for
				payments with or without an invoice.
			</div>
		</li>
		<!--
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#accommodation' })"
						class="uline">
						Accommodation:
					</RouterLink>
				</div>
				Discover lodging options in Puebla, Mexico, to make your stay at the conference comfortable and enjoyable.
				We will provide information on nearby hotels and recommendations.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#how-to-get-there' })"
						class="uline">
						How to Get There:
					</RouterLink>
				</div>
				Get clear directions and details on how to reach the conference venues, both at BUAP (Benemérita Universidad
				Autónoma de Puebla) and Tec de Monterrey, Campus Puebla.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#frequently-asked-questions' })"
						class="uline">
						Frequently Asked Questions:
					</RouterLink>
				</div>
				Find answers to the most common questions you may have about your participation in the conference.
			</div>
		</li>
		-->
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Registration and Payment:</h2>
	<div>
		<p>To attend the conference, the first step is the payment and registration process. We recommend checking the
			information related to <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">{{
				$t("nav.rates_and_registration") }}</RouterLink>,, where you will find details on different rates based on
			participation options, as well as workshop costs and author registration information.</p>

		<h3 class="h4">Payment Instructions:</h3>

		<p>Payments for the CLIHC2023 Congress will be handled as follows:</p>

		<ul>
			<li><strong>Payment without an invoice: </strong> You must provide the referenced form and the payment receipt.
			</li>

			<li><strong>Invoice request:</strong> Requirements vary depending on the payment origin:</li>
			<ul>
				<li><strong>For payments within Mexico</strong>, you must provide the referenced form, the payment receipt,
					a tax situation certificate (in the name of the person to whom the invoice will be issued), specify the
					use of DFDI (usually "General Expenses"), and provide the email address to which the invoice will be
					sent.</li>

				<li><strong>For payments from abroad</strong>, you need to provide the referenced form, the payment receipt,
					the necessary information for the invoice, and the email address to which you want the invoice to be
					sent. An invoice will be issued, and a receipt, similar to the example provided earlier, will be
					attached.</li>
			</ul>
		</ul>

		<p>Asegúrate de enviar toda la información necesaria para generar las facturas de manera oportuna. Además, ten en
			Be sure to send all the necessary information to generate the invoices in a timely manner. Additionally,
			<strong>please note that payment for conference registration is a prerequisite for enrolling in tutorials and
				workshops, and it must be done separately.</strong></p>
</div>

<!--
<h2 id="accommodation" class="mt-5 h3">Accommodation:</h2>
<p>
	Pending
</p>

<h2 id="how-to-get-there" class="mt-5 h3">How to Get There:</h2>
<p>
	Pending
</p>

<h2 id="frequently-asked-questions" class="mt-5 h3">Frequently Asked Questions:</h2>
<p>
	Pending
</p>
-->
</template>