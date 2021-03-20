import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idEditar: 0,
    identificador: 0,
    editar: false,
    productos : [],
    producto: {producto: '', stock: 0, identificador: Store.identificador },
  },
  mutations: {
    add(state) {
      if (!state.editar) {
        const prod = state.producto.producto;
        const stock = state.producto.stock;
        const identificador = state.identificador;
        state.productos.push({ producto: prod, stock, identificador });
        state.producto.producto = '';
        state.producto.stock = 0;
        state.identificador++;
      } else {

        for (const prod of state.productos) {
          if (prod.identificador == state.idEditar) {
            prod.producto = state.producto.producto;
            prod.stock = state.producto.stock;
            state.producto.producto = '';
            state.producto.stock = 0;
          }
        }
      }
      
      state.editar = false
    },
    update(state, id) {
      for (const prod of state.productos) {
        if (prod.identificador == id) {
          state.producto.producto = prod.producto;
          state.producto.stock = prod.stock;
          state.idEditar = prod.identificador;
        }
      }

    },
    delete(state, id) {
      for (const prod of state.productos) {
        
        if (prod.identificador == id) {
          state.productos.splice(state.productos.indexOf(prod), 1);
        }
      }
    },
    change(state) {
      state.editar = true;
    }

  },
  actions: {
  },
  modules: {
  }
})
