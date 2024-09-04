<template lang="">
    <section class="container" id="productos">
        <h1 class="text-center">Nuestros Productos</h1>

        <Card :nombre="nombre"
        :descripcion="descripcion"
        :precio="precio"
        :cantidad="cantidad" /> 

        <router-link to='/' >Volver al inicio</router-link>
        <h6 hidden>ᓀ‸ᓂ</h6>
    </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    components: {
        Card
    },
    props: {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        cantidad: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    }
}
</script>