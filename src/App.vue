<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todoItem="todoItem" />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "./components/Header/Header.vue";
import List from "./components/List/List.vue";
import Footer from "./components/Footer/Footer.vue";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  components: {
    Footer,
    Header,
    List,
  },
  setup() {
    const todolists = reactive({
      todoItem: [
        { id: 1, value: "鸡肉", isCheckbox: false },
        { id: 2, value: "猪肉", isCheckbox: true },
        { id: 3, value: "牛肉", isCheckbox: false },
        { id: 4, value: "鸭肉", isCheckbox: false },
      ],
    });

    //添加数据
    const addTodo = (Todo) => {
      todolists.todoItem.unshift(Todo);
      console.log(Todo);
    };
    return {
      ...toRefs(todolists),
      addTodo,
    };
  },
});
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
