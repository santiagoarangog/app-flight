<script setup lang="ts">
import cosas from "../data/infoP";
</script>

<template>
    <section id="infoP" class="flex flex-col items-center py-32">
        <h2 class="mt-10 mb-28 text-5xl font-bold text-white">¿Qué Usan los Pilotos?</h2>
         <div class="grid grid-cols-3 gap-10">
            <div 
            v-for="(cosa, i) of cosas" 
            :key="cosa.title" 
            class="grid place-items-center text-center gap-5 p-8 rounded-md text-white bg-gradient-to-b "
            :class="i === 1 
            ? 'from-primary-200/50 to-primary-200/30 -translate-y-10' 
            : 'from-primary-200/20 to-primary-200/10'
            "
            >
           
                <div>
                    <img width="120" :src="cosa.image" alt=""  >
                </div >
                <h3 class="text-4xl font bold">{{cosa.title}}</h3>
                <p class="w-[90%] ">{{cosa.desc }}</p>
            </div>
        </div>

    </section>
</template>