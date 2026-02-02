<script setup>
import TheHeader from '@/components/Header.vue';
import RatesAndRegistration from '@/components/Rates-and-registration.vue';
import Tr from '@/i18n/translation'
</script>

<template>
  <TheHeader>
    <template #page-name>      
      {{ $t("nav.rates_and_registration_title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <RatesAndRegistration />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>