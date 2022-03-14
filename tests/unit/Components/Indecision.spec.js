import { shallowMount } from "@vue/test-utils";
import indecision from '../../../src/components/Indecision.vue'

describe('Indecision Component', ()=>{
    let wrapper;
    let clgSpy;

    global.fetch= jest.fn( ()=> Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image:  'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(()=>{
        
        wrapper = shallowMount(indecision)
        clgSpy = jest.spyOn(console,'log')

    })

    test('do match with snapshot ',()=>{
         
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el input y no debe haber un clg', async () => { 
       
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).not.toHaveBeenCalled()
     })

    test('escribir el simbolo de ? debe dispara el getAnswer ', async () => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect( clgSpy ).toHaveBeenCalledTimes(3)
        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test(' pruebas de getAnswer', async () => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('si')
      })

    test(' pruebas de getAnswer - falla en el api ', async () => { 
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
     }) 
})