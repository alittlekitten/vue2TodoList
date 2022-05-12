<template>
  <div id="todo-footer">
    <b-button variant="danger" size="lg" class="clear-btn" @click="clearTodo">전체삭제</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("clearTodo");
    },
  },
};
</script>

<style lang="scss">
#todo-footer {
  .clear-btn {
    font-size: 2rem;
  }
}
</style>
