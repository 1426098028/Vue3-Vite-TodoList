<template>
        <ul class="todo-main">
      <Item />
      </ul>
</template>
<script>
import Item from "../Item/Item.vue"

import { defineComponent } from "vue"
export default defineComponent({
    name:"List",
    setup(){
        return{

        }
    },
    components:{
Item
    }
})
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>