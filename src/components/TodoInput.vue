<template>
  <div id="todo-input">
    <input
      placeholder="할 일을 입력해주세요!"
      type="text"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
    />
    <b-button pill variant="dark" size="lg" class="todo-add-btn" type="button" @click="addTodo"
      >추가하기</b-button
    >
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

<style lang="scss">
#todo-input {
  input {
    margin: 1rem;
    width: 300px;
  }

  .todo-add-btn {
    font-size: 2rem;
  }
}
</style>
