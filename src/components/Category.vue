<script setup lang="ts">
import category1 from "../assets/imgs/category/map.png"
import category2 from "../assets/imgs/category/piloto.png"
import category3 from "../assets/imgs/category/aeropuerto.png"

 const categories=[
 {
    title: 'Ubicacion',
    image: category1,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui quod atque, corrupti impedit, neque voluptatem corporis odio fuga iste repellat ipsum ad accusantium ex hic accusamus unde pariatur consequuntur.',
 },
 {
    title: 'Pilotos',
    image: category2,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui quod atque, corrupti impedit, neque voluptatem corporis odio fuga iste repellat ipsum ad accusantium ex hic accusamus unde pariatur consequuntur.',
 },

{
    title: 'Aeropuertos',
    image: category3,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui quod atque, corrupti impedit, neque voluptatem corporis odio fuga iste repellat ipsum ad accusantium ex hic accusamus unde pariatur consequuntur.',
},
]
</script>

<template>
    <section id="category" class="flex flex-col items-center  h-screen py-32">
       <h2 class="my-10 text-6xl font-bold text-white">Category</h2>
      <div class="grid grid-cols-3 place-items-center">
        <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
           <div class="p-10">
            <img :src="category.image" class="w-[120px]" alt="category1">
           </div>
            <h3 class="text-3xl font-bold">{{ category.title }}</h3>
            <p class="w-3/4">{{category.desc}}</p>
          </div>
        </div>
    </section>
    <section class="grid grid-flow-col  grid-cols-2 gap-10 items-center">
      <div class="p-10">
         <img  class="m-80 width=610px" src="../assets/imgs/category/aviacion.png">
      </div>
      <div>
            <h2 class="text-4xl font-bold text-white">Que hacemos en esta pagina</h2>
            <div class="flex items-center gap-5">
               <h2 class="text-4xl font-bold text-white">Appi-flight</h2>
               <img src="../assets/imgs/category/telefono-inteligente.png" alt="">
            </div>
           <p class="mt-12 text-white  text-xl w-[80%]">
            Esto funciona para hacer el adecuado calculo de las horas de vuelo de un piloto, dandole un seguro y apropiado resultado.
           </p>
      </div>
    </section>
</template>
