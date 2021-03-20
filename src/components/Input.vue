<template>
    <div class="container">
        <input type="text" class="form-control my-3" placeholder="Producto" v-model="producto.producto">
        <input type="number" class="form-control my-3" placeholder="Cantidad" v-model="producto.stock">
        <button class="btn btn-block my-3" v-bind:class="editar ? 'btn-warning' : 'btn-success'" @click="add">{{texto}}</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    data() {
        return ({text: '',})
    },
    computed: {
        ...mapState(['producto', 'productos', 'editar']),
        texto(){
            if (!this.editar) {
                return 'agregar';
            }else{
                return 'editar';
            }
        }
    },
    methods:{
        ...mapMutations(['add', 'change']),
    }
}
</script>