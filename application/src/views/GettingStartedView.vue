<script setup>
import TheHeader from '@/components/Header.vue';
import GettingStarted from '@/components/Getting-started.vue';
import Tr from '@/i18n/translation'
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.getting_started_title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>