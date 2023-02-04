<script setup>
import pilots from '../data/pilot.js';
</script>

<template>
<section id="pilot" class="flex flex-col items-center  py-15">
<h2 class="mt-10 mb-32 text-6xl font-bold text-white">pilot things</h2>
<div class="grid grid-cols-3 gap-10 p-10">
    <div 
    v-for= "(pilot,i) of pilots" 
    :key="pilot.title"
    class="grid place-items-center text-center gap-5 p-8 rounded-md text-white bg-gradient-to-b"
    :class="i===1
     ? 'from-primary-200/50 to-primary-200/30 -translate-y-10'
     : 'from-primary-200/20 to-primary-200/10'
     "
    >
        <div>
        <img :src="pilot.image" class="w-[100px]">
        </div>
        <h3 class="text-4xl font-bold">{{ pilot.title }}</h3>
        <p class="w-[90%]">{{ pilot.desc}}</p>
    </div>
</div>
</section>
</template>
