<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h2 class="">To attend the entire conference</h2>

	<table class="table table-striped">
		<caption>Cost table for attending the entire conference</caption>
		<thead>
			<tr>
				<th scope="col">Description</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>In-person for professionals</td>
				<td>$2500</td>
				<td>$145</td>
			</tr>
			<tr>
				<td>In-person for student authors</td>
				<td>$1400</td>
				<td>$87</td>
			</tr>
			<tr>
				<td>In-person for non-author students</td>
				<td>$500</td>
				<td>$30</td>
			</tr>
			<tr>
				<td>Virtual for professionals</td>
				<td>$880</td>
				<td>$55</td>
			</tr>
			<tr>
				<td>Virtual for students</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Note:</strong> Gala dinner and meals are not included in the registration fee.</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">To attend Tutorials/Workshops (limited seats)</h2>

	<table class="table table-striped">
		<caption>Cost table for attending Tutorials/Workshops (limited seats)</caption>
		<thead>
			<tr>
				<th scope="col">Description</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>In-person for professionals </td>
				<td>$690 </td>
				<td>$40</td>
			</tr>
			<tr>
				<td>In-person for students</td>
				<td>$270</td>
				<td>$15</td>
			</tr>
			<tr>
				<td>Virtual for professionals</td>
				<td>$345</td>
				<td>$20</td>
			</tr>
			<tr>
				<td>Virtual for students</td>
				<td>$85</td>
				<td>$5</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Note:</strong> Conference registration is a prerequisite for Tutorial and Workshop registration.</td>
			</tr>
		</tfoot>
	</table>

	<h2 class="">About author registration</h2>

	<ol>
		<li>
			For publications with at least one professional author
			<ol type="a">
				<li>Each paper to be presented must have at least one professional author registered either in-person or virtually.</li>
				<li>If multiple papers are associated with the same professional author, then for each additional publication, the registered author must pay (cancel) the publication fee (880 pesos), or alternatively, another professional author must register at least in the virtual mode.</li>
			</ol>
		</li>
		<li>
			For publications where all authors are students
			<ol type="a">
				<li>Each paper to be presented must have at least one author registered either in-person or virtually.</li>
			</ol>
		</li>
		<li>
			About discounts
			<ol type="a">
				<li>Registrants between September 15 and October 15 can register for Tutorials and Workshops at no additional cost.</li>
				<li>50% discount for in-person registration of professors who register 5 students in the in-person mode.</li>
				<li>100% discount for in-person registration of professors who register 10 students in this mode.</li>
				<li>50% discount for in-person registration of professors who register 10 students in the virtual mode.</li>
				<li>100% if they register 20 students in the virtual mode.</li>
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