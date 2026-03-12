<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="uline">
                    Chamada de trabalhos (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Submissão de resumos:</strong> 9 de março, 2026<br>
            <strong class="text-primary text-gradient">Submissão de artigos:</strong> 9 de março, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-call'})" class="uline">
                    Chamada de artigos curtos (CSP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Submissão de resumos:</strong> 9 de março, 2026<br>
            <strong class="text-primary text-gradient">Submissão de artigos:</strong> 9 de março, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" class="uline">
                    Chamada para sessão de pôsteres (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 5 de abril, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-call'})" class="uline">
                Chamada para workshops e tutoriais (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 9 de março, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-call'})" class="uline">
                Competição de design estudantil (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Extensão do prazo de envio:</strong> 16 de março de 2026<br>
            Estendido a partir de 13 de março de 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-call'})" class="uline">
                Colóquio de pós-graduação (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 14 de março, 2026<br>
        </div>
        </li>
    </ol>    
</template>
