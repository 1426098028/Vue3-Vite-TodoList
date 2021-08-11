<template>
  <li @mouseenter="Movein" @mouseleave="Remove" :class="Discoloration">
    <label>
      <input type="checkbox" v-model="todo.isCheckbox" />
      <span>{{ todo.value }}</span>
    </label>
    <button
      class="btn btn-danger"
      v-show="Discoloration === 'MoveinColor' ? true : false"
    >
      删除
    </button>
  </li>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Item",
  props: ["todo"],
  setup() {
    const Discoloration = ref("");
    // 鼠标移入
    const Movein = () => {
      Discoloration.value = "MoveinColor";
      console.log("移入");
    };
    //鼠标移出
    const Remove = () => {
      Discoloration.value = "RemoveColor";

      console.log("移出");
    };
    return {
      Discoloration,
      Movein,
      Remove,
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