<template>
  <img alt="Vue logo" src="./assets/logo.png"> 
  <counter-vue name="Entraron" :start=initialNumber />
  <counter-vue name="Salieron" :start=initialNumber />
</template>

<script> 
import CounterVue from './components/Counter.vue'


export default {
  name: 'App',
  components: { 
    CounterVue
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
