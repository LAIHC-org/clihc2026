<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main role="main">
    <router-link :to="{ hash: '#main-content' }" class="visually-hidden-focusable">Go to main content</router-link>
    <TheNavBar />
    <div id="main-content">
      <RouterView />
    </div>
  </main>
  <theFooter />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';
</style>
