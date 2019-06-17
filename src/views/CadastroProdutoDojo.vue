<template>
<div>
    Identificador:
    <input type="text" v-model="id"/>

    Descrição:
    <input type="text" v-model="descricao"/>

    <button @click="gravar()">Gravar</button>
</div>
</template>
<script>
export default {
  name: 'cadastro-produto-dojo',
  data() {
    return {
      id: '',
      descricao: '',
    };
  },
  methods: {
    gravar() {
      this.$store.commit('gravarProdutosDojo', { id: this.id, descricao: this.descricao });
      this.$router.push({ name: 'pesquisa' });
    },
  },
};
</script>
