<script setup>
import TheHeader from '@/components/Header.vue'
</script>

<template>
    <TheHeader>
        <template #page-name>
            404 Page not Found
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8 text-center">
                    <h2>Ooops!</h2>
                    <p>Sorry, we can't find that page</p>
                    <a class="btn bg-gradient-primary btn-round" href="./">Home</a>
                </div>
            </div>
        </div>
    </section>

</template>