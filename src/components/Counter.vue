<template>
    <h2>Counter</h2>
    <h1>{{name || 'Counter'}}</h1>
    <h3>{{counter}} <sup>{{exp}}</sup> = {{calculo}} </h3>

    <p data-testId="nameC">{{nameTest}}</p>
    <p data-tesId='Counter'>100</p>
    <p data-tesId2='Counter'>{{counter}}</p>

    <div>
       <button data-tesId="btnIncrease" @click="increase"> +1 </button>
       <button data-tesId="btnDecrease" @click="decrease"> -1 </button>

    </div>

</template>

<script>

    export default {
        props:{
            name:String,
            start:{
                type:Number,
                default:1,
                validator(value){
                    return value>=1 
                }
            }
        } ,
        name:'Shalala',
        data() {
            return {
                counter: this.start,
                exp:3,
                nameTest:'Ahh'
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