<template>
  <div>
    说的是什么{{msg}}
    <div class="sg" @click="go">gogogo</div>
    <div class="" @click="sendMsgToParent">子传父</div>
  </div>
</template>
<script>
export default {
  props:{
    msg:{
      type: String,
    }
  },  
  data(){
    return {
      name:"张三"
    }
  },
  methods:{
    go(){
      alert('gogogo')
    },
    sendMsgToParent(){
      this.$emit('listenChildMsg','这个是子组件传递过来的')
    }
  }
}
</script>
<style lang="scss">
  
</style>
