<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col" colspan="2" class="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prod of productos" :key="prod.id">
                    <th scope="row">{{prod.identificador}}</th>
                    <td>{{prod.producto}}</td>
                    <td>{{prod.stock}}</td>
                    <td class="text-center"><button class="btn btn-warning" @click="editarItem(prod.identificador)">editar</button></td>
                    <td class="text-center"><button class="btn btn-danger" @click="eliminar(prod.identificador)">eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState(['producto', 'productos', 'editar'])
    },
    methods:{
        eliminar(id){
            this.delete(id);
        },
        editarItem(id){
            this.change();
            this.update(id);
        },
        ...mapMutations(['update', 'delete', 'change']),
    }
}
</script>