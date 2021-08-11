<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="todovalue"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addEnter"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 定义一个ref类型的数据
    const todovalue = ref("");
    const addEnter = () => {
      let Value = todovalue.value;
      if (!Value.trim()) {
        return false;
      }
      const todo = {
        id: Date.now(),
        value: Value.trim(),
        isCheckbox: false,
      };
      props.addTodo(todo);
    };
    return {
      todovalue,
      addEnter,
    };
  },
});
</script>
<style >
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>