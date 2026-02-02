<script setup>
import TheHeader from '@/components/Header.vue';
import CallsTable from '@/components/CallsTable.vue';
import Tr from '@/i18n/translation'
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("calls.title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <CallsTable />
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