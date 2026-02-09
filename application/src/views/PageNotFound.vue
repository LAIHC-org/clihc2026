<script setup>
import TheHeader from '@/components/Header.vue'
import Tr from '@/i18n/translation'
</script>

<template>
    <TheHeader>
        <template #page-name>
            404 Page not Found
        </template>
    </TheHeader>

    <BreadcrumbsNav />

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8 text-center">
                    <h2>Ooops!</h2>
                    <p>Sorry, we can't find that page</p>
                    <RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="btn bg-gradient-primary btn-round">
                        Home
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>

</template>
