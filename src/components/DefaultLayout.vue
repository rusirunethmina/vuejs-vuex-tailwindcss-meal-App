<template>
  <div class="bg-gray-100 h-full">
    <navBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import navBar from "../components/NavBar.vue";
</script>
