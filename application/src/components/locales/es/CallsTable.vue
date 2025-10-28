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
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>3 de julio PRORROGADA</del><strong class="text-danger"> Cerrada</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters'})" class="uline">
                    Convocatoria de pósteres (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong><del>11 de agosto EXTENDIDA</del><strong class="text-danger"> Closed</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })" class="uline">
                Convocatoria de talleres y tutoriales (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>11 de agosto EXTENDIDA</del><strong class="text-danger"> Closed</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" class="uline">
                Competencia de diseño para estudiantes (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>11 de agosto EXTENDIDA</del><strong class="text-danger"> Closed</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" class="uline">
                Coloquio de graduados (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>11 de agosto EXTENDIDA</del><strong class="text-danger"> Closed</strong><br>
        </div>
        </li>
    </ol>    
</template>