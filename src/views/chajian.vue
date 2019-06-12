<template>
  
  <div>
<vue-pikaday 
    v-model="now"
    placeholder="Pick a date"
    @focus="triggerFocus()"
    @blur="triggerBlur()"
  />
  <knob-control v-model="someValue"></knob-control>
  
  </div>
</template>

<script>
import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';
  import '@enrian/vue-pikaday';
  export default {
    data() {
      return {
        now: null
      }
    },
    methods: {
      triggerFocus() {
        console.log('focus triggered');
      },
      triggerBlur() {
        console.log('blur triggered')
      }
    }
  }
</script>
<style lang="">
  
</style>