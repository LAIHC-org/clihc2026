<script setup>
import TheHeader from '@/components/Header.vue';
import Schedule from '@/components/Schedule.vue';
import Tr from '@/i18n/translation'
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("nav.schedule") }}
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-12">
                    <Schedule />
                </div>
            </div>
        </div>
    </section>
</template>