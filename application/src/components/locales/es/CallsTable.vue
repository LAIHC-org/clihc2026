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
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers'})" class="uline">
                    Convocatoria de trabajos (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Envío de resúmenes:</strong> 9 de marzo, 2026<br>
            <strong class="text-primary text-gradient">Envío de artículos:</strong> 9 de marzo, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-call'})" class="uline">
                    Convocatoria de artículos cortos (CSP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Envío de resúmenes:</strong> 9 de marzo, 2026<br>
            <strong class="text-primary text-gradient">Envío de artículos:</strong> 9 de marzo, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters'})" class="uline">
                    Convocatoria de pósteres (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 5 de abril, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })" class="uline">
                Convocatoria de talleres y tutoriales (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 9 de marzo, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="uline">
                Competencia de diseño para estudiantes (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Extensión de la fecha límite de envío:</strong> 16 de marzo de 2026<br>
            Extendida desde el 13 de marzo de 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="uline">
                Coloquio de graduados (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Extensión de la fecha límite de envío:</strong> 28 de marzo de 2026<br>
            Extendido desde el 14 de marzo de 2026<br>
        </div>
        </li>
    </ol>    
</template>
