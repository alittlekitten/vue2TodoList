<template>
  <div>
    <button @click="clearTodo">전체삭제</button>
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
