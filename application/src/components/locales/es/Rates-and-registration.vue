<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h2 class="">Para asistir a toda la conferencia</h2>

	<table class="table table-striped">
		<caption>Tabla de costos para asistir a toda la conferencia</caption>
		<thead>
			<tr>
				<th scope="col">Descripción</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Presencial para profesionales</td>
				<td>$2500</td>
				<td>$145</td>
			</tr>
			<tr>
				<td>Presencial para estudiantes autores</td>
				<td>$1400</td>
				<td>$87</td>
			</tr>
			<tr>
				<td>Presencial para estudiantes no autores</td>
				<td>$500</td>
				<td>$30</td>
			</tr>
			<tr>
				<td>Virtual para profesionales</td>
				<td>$880</td>
				<td>$55</td>
			</tr>
			<tr>
				<td>Virtual para estudiantes</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> Cena de Gala y comidas no están incluidas en el registro</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">Para asistir a Tutoriales/Talleres (límite de cupos)</h2>

	<table class="table table-striped">
		<caption>Tabla de costos para asistir a Tutoriales/Talleres (límite de cupos)</caption>
		<thead>
			<tr>
				<th scope="col">Descripción</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Presencial para profesionales</td>
				<td>$690 </td>
				<td>$40</td>
			</tr>
			<tr>
				<td>Presencial para estudiantes</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
			<tr>
				<td>Virtual para profesionales</td>
				<td>$345</td>
				<td>$20</td>
			</tr>
			<tr>
				<td>Virtual para estudiantes</td>
				<td>$85</td>
				<td>$5</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> El registro a la conferencia es pre-requisito para el registro a Tutoriales y Talleres</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">Sobre registro de autores</h2>

	<ol>
		<li>
			Para publicaciones con al menos un autor profesional
			<ol type="a">
				<li>Cada artículo a presentar debe tener al menos un autor profesional registrado ya en modalidad presencial o virtual</li>
				<li>Si varios artículos están asociados con el mismo autor profesional, entonces por cada publicación adicional, el autor registrado debe pagar (cancelar) el valor de la publicación (880 pesos) o, en su defecto, otro autor profesional debe registrarse al menos en modalidad virtual</li>
			</ol>
		</li>
		<li>
			Para publicaciones donde todos los autores son estudiantes
			<ol type="a">
				<li>Cada artículo a presentar debe tener al menos un autor registrado ya sea en modalidad presencial o virtual</li>
			</ol>
		</li>
		<li>
			Sobre descuentos
			<ol type="a">
				<li>Registrados entre el 15 de septiembre y 15 de octubre podrán registrarse en tutoriales y talleres sin cobro adicional</li>
				<li>50% de descuento para el registro presencial de profesores que registren a 5 estudiantes en modalidad presencial</li>
				<li>100% de descuento al registro presencial de profesores que registren a 10 estudiantes en esta modalidad</li>
				<li>50% de descuento al registro presencial de profesores que registren a 10 estudiantes en modalidad virtual</li>
				<li>100% sí registran a 20 estudiantes en modalidad virtual</li>
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