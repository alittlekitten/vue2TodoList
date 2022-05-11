<template>
  <div>
    <ul>
      <li v-for="todo in propsData" :key="todo.cnt">
        {{ todo.todo }}
        <button @click="removeTodo(todo)">x</button>
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
