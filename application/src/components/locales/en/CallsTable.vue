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
                    Call for papers (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Abstract submission:</strong> March 1, 2026<br>
            <strong class="text-primary text-gradient">Paper submission:</strong> March 8, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers', hash: '#csp-call'})" class="uline">
                    Call for short papers (CSP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Abstract submission:</strong> March 2, 2026<br>
            <strong class="text-primary text-gradient">Paper submission:</strong> March 9, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-call'})" class="uline">
                    Call for poster track (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> April 5, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-call'})" class="uline">
                Call for workshops and tutorials (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> March 9, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-call'})" class="uline">
                Student design competition (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> March 5, 2026<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-call'})" class="uline">
                Graduate Colloquium (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> March 14, 2026<br>
        </div>
        </li>
    </ol>    
</template>
