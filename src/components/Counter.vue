<template>
    <h1>{{name || 'Counter '}}</h1>
    <h3>{{counter}} <sup>{{exp}}</sup> = {{calculo}} </h3>

    <div>
       <button @click="increase"> +1 </button>
       <button @click="decrease"> -1 </button>

    </div>

</template>

<script>

    export default {
        props:{
            name:String,
            start:{
                type:Number,
                validator(value){
                    return value>=1 
                }
            }
        } ,
        name:'Shalala',
        data() {
            return {
                counter: this.start,
                exp:3
            }
        },
        methods: {
            expM(){
                return 'Hola mundo'
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed:{
            calculo(){
                let value = this.counter ** this.exp
                
                return value
            },

        }
}
</script>

<style>
    button{
        background-color: aqua ;
        border-radius: 5px;
        border: 1px solid violet;
        color:blue;
        padding: 10px;
        margin: 5px 10px 0px 10px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #003359;
        color: aliceblue;
        transition: 0.3s ease-in;
    }
</style>