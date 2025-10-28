<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h2 class="">Para participar de toda a conferência</h2>

	<table class="table table-striped">
		<caption>Tabela de custos para participar de toda a conferência</caption>
		<thead>
			<tr>
				<th scope="col">Descrição</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Presencial para profissionais</td>
				<td>$2500</td>
				<td>$145</td>
			</tr>
			<tr>
				<td>Presencial para estudantes autores</td>
				<td>$1400</td>
				<td>$87</td>
			</tr>
			<tr>
				<td>Presencial para estudantes não autores</td>
				<td>$500</td>
				<td>$30</td>
			</tr>
			<tr>
				<td>Virtual para profissionais</td>
				<td>$880</td>
				<td>$55</td>
			</tr>
			<tr>
				<td>Virtual para estudantes</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> O jantar de gala e as refeições não estão incluídos na taxa de inscrição.</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">Para participar de Tutoriais/Oficinas (lugares limitados)</h2>

	<table class="table table-striped">
		<caption>Tabela de custos para participar de Tutoriais/Oficinas (lugares limitados)</caption>
		<thead>
			<tr>
				<th scope="col">Descrição</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Presencial para profissionais</td>
				<td>$690 </td>
				<td>$40</td>
			</tr>
			<tr>
				<td>Presencial para estudantes</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
			<tr>
				<td>Virtual para profissionais</td>
				<td>$345</td>
				<td>$20</td>
			</tr>
			<tr>
				<td>Virtual para estudantes</td>
				<td>$85</td>
				<td>$5</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> A inscrição na conferência é um pré-requisito para a inscrição em Tutoriais e Oficinas</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">Sobre registro de autores</h2>

	<ol>
		<li>
			Para publicações com pelo menos um autor profissional
			<ol type="a">
				<li>Cada artigo a ser apresentado deve ter pelo menos um autor profissional registrado, seja presencial ou virtualmente.</li>
				<li>Se vários artigos estiverem associados ao mesmo autor profissional, então, para cada publicação adicional, o autor registrado deve pagar (cancelar) a taxa de publicação (880 pesos), ou alternativamente, outro autor profissional deve se registrar pelo menos na modalidade virtual.</li>
			</ol>
		</li>
		<li>
			Para publicações em que todos os autores são estudantes
			<ol type="a">
				<li>Cada artigo a ser apresentado deve ter pelo menos um autor registrado, seja presencial ou virtualmente.</li>
			</ol>
		</li>
		<li>
			Sobre descontos
			<ol type="a">
				<li>Os registrantes entre 15 de setembro e 15 de outubro podem se inscrever em Tutoriais e Oficinas sem custos adicionais.</li>
				<li>Desconto de 50% para o registro presencial de professores que registrem 5 estudantes no modo presencial.</li>
				<li>Desconto de 100% para o registro presencial de professores que registrem 10 estudantes neste modo.</li>
				<li>Desconto de 50% para o registro presencial de professores que registrem 10 estudantes no modo virtual.</li>
				<li>100% de desconto se registrarem 20 estudantes no modo virtual.</li>
			</ol>
		</li>
	</ol>

    <section class="py-5 container" id="download-soft-ui">
        <div class="bg-gradient-dark position-relative border-radius-xl overflow-hidden">
            <img src="/assets/img/shapes/waves-white.svg" alt="" class="position-absolute start-0 top-md-0 w-100 opacity-6">
            <div class="container py-7 postion-relative z-index-2 position-relative">
                <div class="row">
                    <div class="col-md-7 mx-auto text-center">                        
                        <a href="https://true-werewolf-eternal.ngrok-free.app/" class="btn btn-lg  bg-gradient-yellow  btn-round">
							{{ $t("register.register_button") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>