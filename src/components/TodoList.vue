<template>
  <div id="todo-list">
    <ul>
      <li v-for="todo in propsData" :key="todo.cnt">
        <span class="todo">{{ todo.todo }}</span>
        <b-button pill size="sm" class="test" @click="removeTodo(todo)">x</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsData"],
  methods: {
    removeTodo(todo) {
      this.$emit("removeTodo", todo);
    },
  },
};
</script>

<style lang="scss">
#todo-list {
  margin: 1rem 0 2rem 0;

  ul {
    list-style: none;
  }

  .todo {
    color: $todo-color;
    margin-right: 1rem;
  }

  .test {
    font-size: 2rem;
  }
}
</style>
