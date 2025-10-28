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
		Bienvenidos al XI Congreso Latinoamericano de Interacción Humano-Computadora (CLIHC 2023). Nos complace darles la
		bienvenida a este destacado evento que reúne a comunidades de investigación de HCI de América Latina e
		internacionales. Esta página "Primeros pasos" está diseñada para proporcionar información esencial para su
		participación en la conferencia.
	</p>

	<ol class="list-group list-group-numbered">
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })"
						class="uline">
						Registro y Pago:
					</RouterLink>
				</div>
				Obtenga información para inscribirse y pagar, asegurando su asistencia al CLIHC 2023, con instrucciones para
				pagos con o sin factura.
			</div>
		</li>
		<!--
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#accommodation' })"
						class="uline">
						Hospedaje:
					</RouterLink>
				</div>
				Descubra opciones de alojamiento en Puebla, México, para que su estancia en la conferencia sea cómoda y
				agradable. Proporcionaremos información sobre hoteles cercanos y recomendaciones.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#how-to-get-there' })"
						class="uline">
						Cómo Llegar:
					</RouterLink>
				</div>
				Obtenga indicaciones claras y detalles sobre cómo llegar a los sitios de la conferencia, tanto en la BUAP
				(Benemérita Universidad Autónoma de Puebla) como en el Tec de Monterrey, Campus Puebla.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#frequently-asked-questions' })"
						class="uline">
						Preguntas Frecuentes:
					</RouterLink>
				</div>
				Encuentre respuestas a las preguntas más comunes que pueda tener sobre su participación en la conferencia.
			</div>
		</li>
		-->
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Registro y Pago</h2>
	<div>
		<p>Para asistir a la conferencia, el primer paso es el proceso de pago y registro. Te recomendamos consultar la
			información relacionada con <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">{{ $t("nav.rates_and_registration") }}</RouterLink>, donde encontrarás detalles sobre las diferentes tarifas según
			las opciones de participación, así como el costo de los talleres e información para el registro de autores.</p>

		<h3 class="h4">Instrucciones de Pago:</h3>

		<p>Los pagos para el Congreso CLIHC2023 se manejarán de la siguiente manera:</p>

		<ul>
			<li><strong>Pago sin factura:</strong> Debes proporcionar la ficha referenciada y el comprobante de pago.</li>

			<li><strong>Solicitud de factura:</strong> Los requisitos varían según el origen del pago:</li>
				<ul>
					<li><strong>Para pagos dentro de México</strong>, debes proporcionar la ficha referenciada, el comprobante de pago, una
					constancia de situación fiscal (a nombre de la persona a la que se emitirá la factura), indicar el uso del
					DFDI (por lo general, "Gastos en General"), y proporcionar el correo electrónico al cual se enviará la
					factura.</li>

					<li><strong>Para pagos desde el extranjero</strong>, se requiere la ficha referenciada, el comprobante de pago, los datos
					necesarios para el comprobante y el correo electrónico al cual deseas que se envíe el comprobante. Se
					emitirá una factura y se adjuntará un comprobante, similar al ejemplo que se proporcionó anteriormente.</li>
				</ul>
		</ul>

		<p>Asegúrate de enviar toda la información necesaria para generar las facturas de manera oportuna. Además, ten en
			cuenta que <strong>el pago del registro a la conferencia es un requisito previo para la inscripción en tutoriales y
			talleres, y debe realizarse por separado.</strong></p>
	</div>

<!--
	<h2 id="accommodation" class="mt-5 h3">Hospedaje</h2>
<p>
	Pendiente
</p>

<h2 id="how-to-get-there" class="mt-5 h3">Cómo Llegar</h2>
<p>
	Pendiente
</p>

<h2 id="frequently-asked-questions" class="mt-5 h3">Preguntas Frecuentes</h2>
<p>
	Pendiente
</p>
-->
</template>