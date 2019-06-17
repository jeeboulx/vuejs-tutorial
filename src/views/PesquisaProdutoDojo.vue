<template>
  <div class="container">
    <router-link to="dojo">Cadastro DOJO</router-link>
    <table>
      <thead class="table">
        <tr>
          <th>#</th>
          <th>Descrição</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="produto.id" v-for="produto in produtosDojo">
          <td>{{ produto.id }}</td>
          <td>{{ produto.descricao }}</td>
          <td>Apagar</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'pesquisa-produto-dojo',
  computed: mapState({
    produtosDojo: store => store.produtosDojo,
  }),
};
</script>
