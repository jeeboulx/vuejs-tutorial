<template>
    <div class="container">
        <div class="form-group row">
            <label for="idField">Identificador</label>
            <input type="number"
                class="form-control"
                id="idField"
                aria-describedby="idHelp"
                placeholder="Identificador"
                v-model="produto.id">
            <small id="idHelp"
                class="form-text text-muted">Identificador do produto.</small>
        </div>
        <div class="form-group row">
            <label for="produtoField">Descrição</label>
            <input type="text"
                class="form-control"
                id="produtoField"
                aria-describedby="produtoHelp"
                placeholder="Descrição"
                v-model="produto.descricao">
            <small id="produtoHelp"
                class="form-text text-muted">Descrição do produto.</small>
        </div>
        <button class="btn btn-primary" @click="salvar()">Gravar</button>
    </div>
</template>

<script>
export default {
  name: 'cadastro-produto',
  props: ['id', 'descricao'],
  data() {
    return {
      produto: {
        id: this.id,
        descricao: this.descricao,
      },
    };
  },
  methods: {
    salvar() {
      // https://vuejs.org/v2/guide/components-custom-events.html#ad
      this.$store.commit('salvarProduto', { id: this.produto.id, descricao: this.produto.descricao });
      this.$router.push({ name: 'crud' });
    },
  },
};
</script>
