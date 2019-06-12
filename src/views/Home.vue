<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <bindd :msg="sss" @listenChildMsg="getMsgFromChild"></bindd>
    <p></p>
    <div class="" >{{mmm}}</div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bindd from '@/components/bindd.vue'
export default {
  name: 'home',
  data(){
    return {
      sss:"阿汤哥",
      mmm:"要要要"
    }
  },
  components: {
    HelloWorld,
    bindd
  },
  methods:{
    getMsgFromChild(data){
//getMsgFromChildconsole.log(data)
      this.mmm=data;
    }
  }
}
</script>

