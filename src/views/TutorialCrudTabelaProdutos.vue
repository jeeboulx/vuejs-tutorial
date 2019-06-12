<template>
    <div class="container">
        <table class="table">
            <thead class="thead-dark ">
                <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="produto.id" v-for="produto in produtos">
                    <td>{{produto.id}}</td>
                    <td>{{produto.descricao}}</td>
                    <td><button @click="editar(produto)">Editar</button></td>
                    <td><button @click="remover(produto)">Remover</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'tutorial-crud-tabela-produtos',
  props: ['produtos'],
  methods: {
    editar(produto) {
      this.$router.push({ name: 'cadastro', params: { id: produto.id, descricao: produto.descricao } });
    },
    remover(produto) {
      this.$store.commit('excluirProduto', produto);
    },
  },
};
</script>
