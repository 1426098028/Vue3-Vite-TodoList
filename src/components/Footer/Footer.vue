
<template >
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成 {{ count }}</span> / 全部 {{ todoItem.length }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "Footer",
  props: ["todoItem", "checkAll"],
  setup(props) {
    // 已完成的计算属性操作
    const count = computed({
      get() {
        return props.todoItem.reduce((pre, Item, index) => {
          return pre + (Item.isCheckbox ? 1 : 0);
        }, 0);
      },
      set() {},
    });

    // 全选/全不选的计算属性操作
    const isCheckAll = computed({
      get() {
        return count.value > 0 && count.value === props.todoItem.length;
      },
      set(Val) {
        props.checkAll(Val);
      },
    });

    return {
      count,
      isCheckAll,
    };
  },
});
</script>
<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>