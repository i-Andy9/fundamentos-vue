<template> 
    <img v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input type="text" placeholder="Ingresa una pregunta" v-model="question"> 
        <p> Recuerta terminar con un signo de interrogacion (?)</p>

        <div v-if="validQ">
            <h2>{{question}}</h2>
            <h3>{{answer }}</h3>
        </div>
    </div>
</template>

<script>
    export default {    
        name: 'indecisionQ',
        data(){
            return{
                question:undefined,
                answer:undefined,
                img:undefined,
                validQ:false
            }
        },
        watch:{
            question(value, oldValue){ 
                this.validQ=false
                console.log({value})

                if(!value.includes('?')) return

                this.validQ=true
                console.log({value})
                // TODO: Realizar peticion http 
                this.getAnswer()
            }
        },
        methods:{
            async getAnswer(){
                try {

                    const {answer, image}= await fetch('https://yesno.wtf/api').then(r=> r.json())
                         
                     answer=== 'yes' ? this.answer= 'si': answer=== 'no'? this.answer= 'no' : this.answer= 'Tal vez' 
                    this.img = image

                } catch (error) {
                    console.log('IndecisionComponent: ', error )
                    this.answer = 'No se pudo cargar del API'
                    this.img    = null
                }
            }
        }
    }
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>