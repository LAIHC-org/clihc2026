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
		Bem-vindo à XI Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2023). Temos o prazer de recebê-lo neste evento excepcional que reúne comunidades de pesquisa em HCI da América Latina e de todo o mundo. Esta página "Primeiros Passos" foi projetada para fornecer informações essenciais para a sua participação na conferência.
	</p>

	<ol class="list-group list-group-numbered">
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })"
						class="uline">
						Inscrição e Pagamento:
					</RouterLink>
				</div>
				Obtenha informações sobre como se inscrever e pagar, garantindo a sua presença no CLIHC 2023, com instruções para pagamentos com ou sem fatura.
			</div>
		</li>
		<!--
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#accommodation' })"
						class="uline">
						Acomodação:
					</RouterLink>
				</div>
				Descubra opções de alojamento em Puebla, México, para tornar a sua estadia na conferência confortável e agradável. Forneceremos informações sobre hotéis próximos e recomendações.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#how-to-get-there' })"
						class="uline">
						Como Chegar:
					</RouterLink>
				</div>
				Obtenha instruções claras e detalhes sobre como chegar aos locais da conferência, tanto na BUAP (Benemérita Universidad Autónoma de Puebla) como no Tec de Monterrey, Campus Puebla.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#frequently-asked-questions' })"
						class="uline">
						Perguntas Frequentes:
					</RouterLink>
				</div>
				Encontre respostas para as perguntas mais comuns que você possa ter sobre a sua participação na conferência.
			</div>
		</li>
		-->
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Inscrição e Pagamento:</h2>
	<div>
		<p>Para participar da conferência, o primeiro passo é o processo de pagamento e inscrição. Recomendamos verificar as informações relacionadas a  <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">{{ $t("nav.rates_and_registration") }}</RouterLink>, onde você encontrará detalhes sobre diferentes tarifas com base nas opções de participação, bem como custos de oficinas e informações de inscrição para autores.</p>

		<h3 class="h4">Instruções de Pagamento:</h3>

		<p>Os pagamentos para o Congresso CLIHC2023 serão tratados da seguinte forma:</p>

		<ul>
			<li><strong>Pagamento sem fatura: </strong> Você deve fornecer o formulário de referência e o recibo de pagamento.</li>

			<li><strong>Solicitação de fatura: </strong> Os requisitos variam dependendo da origem do pagamento:</li>
				<ul>
					<li><strong>Para pagamentos dentro do México</strong>, você deve fornecer o formulário de referência, o recibo de pagamento, um comprovante de situação fiscal (em nome da pessoa para quem a fatura será emitida), especificar o uso do DFDI (geralmente "Despesas Gerais") e fornecer o endereço de e-mail para o qual a fatura será enviada.</li>

					<li><strong>Para pagamentos do exterior</strong>, você precisa fornecer o formulário de referência, o recibo de pagamento, as informações necessárias para a fatura e o endereço de e-mail para o qual deseja que a fatura seja enviada. Uma fatura será emitida e um recibo, semelhante ao exemplo fornecido anteriormente, será anexado.</li>
				</ul>
		</ul>

		<p>Certifique-se de enviar todas as informações necessárias para gerar as faturas de forma oportuna. Além disso, <strong>observe que o pagamento da inscrição na conferência é um pré-requisito para se inscrever em tutoriais e oficinas, e deve ser feito separadamente.</strong></p>
	</div>

	<!--
	<h2 id="accommodation" class="mt-5 h3">Acomodação</h2>
	<p>
		Pendente
	</p>

	<h2 id="how-to-get-there" class="mt-5 h3">Como Chegar</h2>
	<p>
		Pendente
	</p>

	<h2 id="frequently-asked-questions" class="mt-5 h3">Perguntas Frequentes</h2>
	<p>
		Pendente
	</p>
	-->
</template>