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
                    {{ $t('calls.cfp_title') }}
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">{{ $t('calls.cfp_abstract') }}</strong> {{ $t('about.upcoming') }}<br>
            <strong class="text-primary text-gradient">{{ $t('calls.cfp_paper') }}</strong> {{ $t('about.upcoming') }}<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-call'})" class="uline">
                    {{ $t('calls.cpt_title') }}
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">{{ $t('calls.deadline') }}</strong> {{ $t('about.upcoming') }}<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-call'})" class="uline">
                {{ $t('calls.cwt_title') }}
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">{{ $t('calls.deadline') }}</strong> {{ $t('about.upcoming') }}<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-call'})" class="uline">
                {{ $t('calls.sdc_title') }}
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">{{ $t('calls.deadline') }}</strong> {{ $t('about.upcoming') }}<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-call'})" class="uline">
                {{ $t('calls.cgc_title') }}
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">{{ $t('calls.deadline') }}</strong> {{ $t('about.upcoming') }}<br>
        </div>
        </li>
    </ol>    
</template>