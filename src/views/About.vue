<template>
  <div class="about">
    <h1>This is an about page {{rtsd}}  </h1>
    <h5>{{now}}</h5>
  </div>
</template>
<script>
export default {
  data(){
    return {
      rt:null
    }
  },
  computed:{
    rtsd:function(){
      return this.$route.params.index
    },
    now:function(){
      return Date.now()
    }
  }
}

</script>
