<script setup lang="ts">
import {onMounted,ref } from 'vue'
const navbar=ref('')
const showMenu = ref(false)
</script>
 
<template>
    <nav class="flex items-center justify-between  h-32">
        <div class="flex gap-2">
            <h1 class="text-white font-bold">Appi flight<span class="text-secondary">!!</span></h1>
            <img class="block h-8 w-auto" src="public/black-plane.png">
        </div>
        <div class="flex items-center gap-10">
            <a @click="showMenu =false" class="text-white font-medium" href="#HOME">Home</a>
            <a @click="showMenu =false" class="text-white font-medium" href="#Category">Category</a>
            <a @click="showMenu =false" class="text-white font-medium" href="#About">About us</a>
            <button class="px-8 py-3 rounded-full text-white font-bold text-lg bg-secondary">Contactenos</button>
        </div>
    </nav>
</template>