<script setup lang="ts">
import category1 from "../assets/img-category/calendar.png"
import category2 from "../assets/img-category/piloto.png"
import category3 from "../assets/img-category/tablet.png"

const categories = [
{
    title: 'Agenda',
    image: category1 ,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque, commodi? Illo consequuntur quidem mollitia facilis.',
},
{
    title: 'Usuario',
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
        <h2 class="my-24  text-5xl font-bold text-white">Categorias</h2>
         <div class="grid grid-cols-3 place-items-center">
            <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
                <div>
                    <img :src="category.image" alt="" width="140">
                </div>
                <h3 class="text-3xl font-bold">{{ category.title }}</h3>
                <p class="w-3/4">{{ category.desc }} </p>
            </div>
         </div>
    </section >
    
    <section class="grid grid-flow-col grid-cols-2 gap-10 items-center">
    <div class="p-10">
        <img src="../assets/img-category/landing.png" alt="" >
    </div>
     <div >
        <h2 class="text-5xl font-bold text-white">Registra tus Horas </h2>
        <div class="flex items-center gap-5 ">
            <h2 class="text-5xl font-bold text-white ">de Forma Segura</h2>
            <img width="40" src="../assets/img-category/registro.png" alt="">
        </div>
    <p class="mt-12 text-white text-xl w-[80%]">Ingresa tus horas de vuelo con la confianza de que se almacenarán correctamente
            y cuando necesites verificar dicho registro estarán disponibles en todo momento.</p>
    </div>
    </section>
    
</template>