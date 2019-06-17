import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [
      {
        id: 1,
        descricao: 'ALFACE LISA',
      },
      {
        id: 2,
        descricao: 'ALFACE PELUDA',
      },
      {
        id: 3,
        descricao: 'ALFACE CRESPA',
      },
      {
        id: 4,
        descricao: 'ALFACE PELUDONA',
      },
    ],
    produtosDojo: [],
  },
  mutations: {
    salvarProduto(state, produto) {
      state.produtos.push(produto);
    },
    excluirProduto(state, produto) {
      for (let i = 0; i < state.produtos.length; i++) {
        const produtoGravado = state.produtos[i];
        if (produtoGravado.id === produto.id && produtoGravado.descricao === produto.descricao) {
          state.produtos.splice(i, 1);
        }
      }
    },
    gravarProdutosDojo(state, produtoDojo) {
      state.produtosDojo.push(produtoDojo);
    },
  },
});
