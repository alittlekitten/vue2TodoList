<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <!-- @는 v-on:과 같다 -->
    <TodoList :propsData="todoItems" :propsCnt="cnt" @removeTodo="removeTodo"></TodoList>
    <!-- :는 v-bind:와 같다 -->
    <TodoFooter @clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "App",
  data() {
    return {
      todoItems: [], // 아이템들
      cnt: 0, // 고유한 key값으로 쓸 용도
    };
  },
  created() {
    if (localStorage.getItem("cnt")) {
      // cnt 확인 (cnt가 로컬스토리지에서 지워졌다면 아이템들도 지우기)
      this.cnt = localStorage.getItem("cnt");
    } else {
      localStorage.clear();
      localStorage.setItem("cnt", 0);
    }
    if (localStorage.getItem("todos")) {
      // todos 확인
      let items = JSON.parse(localStorage.getItem("todos")); // string에서 배열로 바꾸기
      this.todoItems = items;
    }
  },
  methods: {
    addTodo(todo) {
      ++this.cnt;
      this.todoItems.push({ todo: todo, cnt: this.cnt });
      localStorage.setItem("todos", JSON.stringify(this.todoItems)); // 배열에서 string으로 바꾸기
      localStorage.setItem("cnt", this.cnt);
    },
    removeTodo(todo) {
      let items = JSON.parse(localStorage.getItem("todos"));
      this.todoItems = items.filter((elem) => todo.cnt !== elem.cnt);
      localStorage.setItem("todos", JSON.stringify(this.todoItems));
    },
    clearTodo() {
      this.todoItems = [];
      this.cnt = 0;
      localStorage.clear();
    },
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dongle&display=swap");
#app {
  font-family: "Dongle", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  background-color: $bg-color;
  font-size: 2rem;
}
html,
body {
  background-color: $bg-color;
  font-size: 16px;
}
</style>
