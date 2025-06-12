<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {TopBar} from '@/components/icons/Topbar.vue'
const app = Vue.createApp({});

app.component('TopBar', TopBar,
  app.mount('#app')
)
</script>

<template>
  <RouterView/>
</template>

