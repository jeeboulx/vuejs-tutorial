<template>
    <tutorial-crud-tabela-produtos :produtos="produtos"></tutorial-crud-tabela-produtos>
</template>

<script>
import { mapState } from 'vuex';
import TutorialCrudTabelaProdutos from './TutorialCrudTabelaProdutos.vue';

export default {
  name: 'tutorial-crud',
  components: {
    TutorialCrudTabelaProdutos,
  },
  computed: mapState({
    produtos: store => store.produtos,
  }),
};
</script>
