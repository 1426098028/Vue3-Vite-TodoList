<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todoItem="todoItem" />
      <Footer
        :todoItem="todoItem"
        :checkAll="checkAll"
        :ClearSelected="ClearSelected"
      />
    </div>
  </div>
</template>
<script>
import Header from "./components/Header/Header.vue";
import List from "./components/List/List.vue";
import Footer from "./components/Footer/Footer.vue";
import { saveLocalStorage, readLocalStorage } from "./utils/localStorageUtils";
import {
  defineComponent,
  reactive,
  toRefs,
  provide,
  watch,
  onMounted,
} from "vue";
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
        //数据格式
        // { id: 1, value: "鸡肉", isCheckbox: false },
        // { id: 2, value: "猪肉", isCheckbox: true },
        // { id: 3, value: "牛肉", isCheckbox: false },
        // { id: 4, value: "鸭肉", isCheckbox: false },
      ],
    });

    // 界面加载完毕后读取数据
    onMounted(() => {
      todolists.todoItem = readLocalStorage();
    });

    //添加数据
    const addTodo = (Todo) => {
      todolists.todoItem.unshift(Todo);
    };
    //删除数据
    const delTodo = (index) => {
      todolists.todoItem.splice(index, 1);
    };
    provide("delTodo", delTodo); //传递爷组件的方法给孙子组件

    // 修改todolists的isCheckbox属性的状态
    const updateCheckbox = (todoItemVal, Checkbox) => {
      todoItemVal.isCheckbox = Checkbox;
    };
    provide("updateCheckbox", updateCheckbox); // 传递爷组件的方法给孙子组件;

    // 全选或者是全不选的方法
    const checkAll = (isCheckbox) => {
      todolists.todoItem.forEach((item, index) => {
        item.isCheckbox = isCheckbox;
      });
    };

    // 清理所有选中的数据
    const ClearSelected = () => {
      todolists.todoItem = todolists.todoItem.filter((item, index) => {
        return !item.isCheckbox;
      });
    };

    // 监视操作:如果todoItem数组的数据变化了,直接存储到浏览器的缓存中
    watch(
      () => todolists.todoItem,
      (value) => {
        // 保存到浏览器的缓存中
        saveLocalStorage(value);
      },
      { deep: true }
    );
    return {
      ...toRefs(todolists),
      addTodo,
      delTodo,
      updateCheckbox,
      checkAll,
      ClearSelected,
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
