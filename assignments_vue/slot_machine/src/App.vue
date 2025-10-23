<script setup>
import { ref } from 'vue';

const firstName = ref('John');
const picture = ref('https://randomuser.me/api/portraits/men/10.jpg');
</script>

<template>
  <div>
    <h1>Hello {{ firstName }}</h1>
    <img :src="picture" alt="Profile Picture">
  </div>
</template>

<style>
/* Voeg hier je CSS toe */
</style>
