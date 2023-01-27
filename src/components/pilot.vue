<script setup>
import pilots from '../data/pilot.js';
</script>

<template>
<section id="pilot" class="flex flex-col items-center  py-15">
<h2 class="my-10 text-6xl font-bold text-white">pilot things</h2>
<div class="grid grid-cols-3 gap-10">
    <div 
    v-for= "pilot of pilots" 
    :key="pilot.title" 
    class="text-white bg-gradient-to-b from-primary-200 to-primary-100">
        <div>
        <img :src="pilot.image" alt="">
        </div>
        <h3>{{ pilot.title }}</h3>
        <p>{{ pilot.desc}}</p>
    </div>
</div>
</section>
</template>
