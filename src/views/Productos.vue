<template>
    <div class="container text-center">
        <h1>Listado de productos</h1>
        <Input />
        <Lista />
    </div>
</template>

<script>
import Input from '../components/Input'
import Lista from '../components/Lista'
export default {
    name: 'Productos',
    components: {
        Input, Lista
    }
}
</script>