<script setup lang="ts">
import category1 from "../assets/telefono-inteligente.png"
import category2 from "../assets/piloto.png"
import category3 from "../assets/aeropuerto.png"

const categories = [
{
    title: 'Calendario',
    image: category1 ,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque, commodi? Illo consequuntur quidem mollitia facilis.',
},
{
    title: 'Usuarios',
    image: category2,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque, commodi? Illo consequuntur quidem mollitia facilis.',
},
{
    title: 'Ubicación',
    image: category3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque, commodi? Illo consequuntur quidem mollitia facilis.'
}

]

</script>
<template>
    <section id="category" class="flex flex-col items-center py-32">
        <h2 class="my-24  text-6xl font-bold text-white">Category</h2>
         <div class="grid grid-cols-3 place-items-center">
            <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
                <div>
                    <img :src="category.image" alt="" width="120">
                </div>
                <h3 class="text-3xl font-bold">{{ category.title }}</h3>
                <p class="w-3/4">{{ category.desc }} </p>
            </div>
         </div>
    </section>
    
</template>