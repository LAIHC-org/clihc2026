<script setup>
import TheHeader from '@/components/Header.vue';
import Speakers from '@/components/Speakers.vue';

import Tr from '@/i18n/translation'
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.keynotes") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">
            <!--
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#roberto-martinez'})" class="uline">
                      Dr. Roberto Martinez-Maldonado
                    </RouterLink>
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#marisol-wong'})" class="uline">
                      Dr. Marisol Wong-Villacres
                    </RouterLink>
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#claudia-lopez'})" class="uline">
                      Dr. Claudia López Moncada
                    </RouterLink>
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#philippe-palanque'})" class="uline">
                      Dr. Philippe Palanque 
                    </RouterLink>
                  </div>
                </div>
              </li>
            </ol>
          
            <Speakers />
            -->
            <p class="mt-5 text-center">{{ $t("soon.speakers") }} </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>