<script setup>
import TheHeader from '@/components/Header.vue';
import CallForCompetition from '@/components/Call-for-competition.vue';

import Tr from '@/i18n/translation'
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("calls.sdc") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">

            <!-- call for posters-->
            <CallForCompetition />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
dt {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}
</style>