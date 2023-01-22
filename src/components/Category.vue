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
    title: 'pilotos',
    image: category2,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui quod atque, corrupti impedit, neque voluptatem corporis odio fuga iste repellat ipsum ad accusantium ex hic accusamus unde pariatur consequuntur.',
 },

{
    title: 'aeropuertos',
    image: category3,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui quod atque, corrupti impedit, neque voluptatem corporis odio fuga iste repellat ipsum ad accusantium ex hic accusamus unde pariatur consequuntur.',
},
]
</script>

<template>
    <section id="category" class="flex flex-col items-center  h-screen">
       <h2 class="mt-10 mb-28 text-6xl font-bold text-white">Category</h2>
       <div class="grid grid-cols-3 place-items-center">
        <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
           <div class="p-10">
            <img :src="category.image" class="w-[120px]" alt="category1">
           </div>
           <div>
            <h3 class="text-3xl font-bold">{{ category.title }}</h3>
            <p class="w-3/4">{{category.desc}}</p>
           </div>
          </div>
        </div>
    </section>
</template>
