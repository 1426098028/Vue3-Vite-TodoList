<template>
  <li @mouseenter="Movein" @mouseleave="Remove" :class="Discoloration">
    <label>
      <input type="checkbox" v-model="todo.isCheckbox" />
      <span>{{ todo.value }}</span>
    </label>
    <button
      class="btn btn-danger"
      v-show="Discoloration === 'MoveinColor' ? true : false"
      @click="Delete"
    >
      删除
    </button>
  </li>
</template>
<script>
import { defineComponent, ref, inject } from "vue";
export default defineComponent({
  name: "Item", //孙子组件
  props: ["todo", "index"],
  setup(props) {
    const Discoloration = ref("");

    const delTodo = inject("delTodo");
    // 鼠标移入样式变化显示删除按钮
    const Movein = () => {
      Discoloration.value = "MoveinColor";
    };
    // 鼠标移出样式变化显示删除按钮
    const Remove = () => {
      Discoloration.value = "RemoveColor";
    };
    //删除数据方法
    const Delete = () => {
      if (window.confirm("确定删除吗？")) {
        //接收爷组件的方法
        delTodo(props.index);
      }
    };
    return {
      Discoloration,
      Movein,
      Remove,
      Delete,
    };
  },
});
</script>
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
.MoveinColor {
  color: rgb(68, 66, 66);
  background: pink;
}
.RemoveColor {
  color: black;
  background: transparent;
}
li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>