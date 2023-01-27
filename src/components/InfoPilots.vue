<script setup lang="ts">
import cosas from "../data/infoP";
</script>

<template>
    <section id="infoP" class="flex flex-col items-center py-32">
        <h2 class="mt-10 mb-28 text-5xl md:text-6xl font-bold text-white">¿Qué Usan los Pilotos?</h2>
         <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            <div 
            v-for="(cosa, i) of cosas" 
            :key="cosa.title" 
            class="grid place-items-center text-center gap-5 p-12 rounded-md text-white bg-gradient-to-b from-primary-200/20 to-primary-200/10"
            :class="i === 1 && 'from-primary-200/50 to-primary-200/30 lg:-translate-y-10' 
            
            "
            >
           
                <div>
                    <img :src="cosa.image"  width="140" height="140" alt=""  >
                </div >
                <h3 class="text-2xl lg:text-4xl font-bold">{{cosa.title}}</h3>
                <p class="w-[90%] hidden md:block text-justify">{{cosa.desc }}</p>
            </div>
        </div>

    </section>
</template>