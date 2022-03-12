<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> 
  <counter-vue name="Entraron" :start=initialNumber />
  <counter-vue name="Salieron" :start=initialNumber /> -->
  
  <indecision-vue/>
</template>

<script> 
import CounterVue from './components/Counter.vue'
import IndecisionVue from './components/Indecision.vue'

export default {
  name: 'App',
  components: { 
    /* CounterVue, */
    IndecisionVue
  },
  data(){
    return{
      initialNumber: 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
