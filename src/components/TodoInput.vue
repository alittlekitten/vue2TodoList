<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button type="button" @click="addTodo">추가하기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem) {
        let value = this.newTodoItem.trim();
        this.$emit("addTodo", value); // 이벤트를 통해 값 넘겨주기
        this.newTodoItem = "";
      }
    },
  },
};
</script>
