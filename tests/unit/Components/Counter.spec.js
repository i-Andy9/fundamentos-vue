import {  shallowMount } from '@vue/test-utils'
import counter from '../../../src/components/Counter.vue'


describe('Counter Component',()=>{

    let wrapper 
    beforeEach(() => {
        wrapper = shallowMount(counter)
    })
    /* test('match => snapshot', ()=>{

                expect( wrapper.html() ).toMatchSnapshot()
    })
 */
    test('h2 = "Counter"',()=>{

                expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')

    })

    test('value of <p> = 100',()=>{
                //const allTags = wrapper.findAll('p')
        const val = wrapper.find('[data-tesId2="Counter"]').text()

        //expect(allTags[1].text()).toBe('100')
        expect(val).toBe('1')
    })

    test('increase vlaue of counter', async ()=>{

        /* 
        const btn1 = wrapper.find( '[data-tesId="btnIncrease"]')

        await btn1.trigger('click')

        const valor1 = wrapper.find( '[data-tesId2="Counter"]').text()

        expect(valor1).toBe('2')


        const btn2 = wrapper.find( '[data-tesId="btnDecrease"]')

        await btn2.trigger('click')
        await btn2.trigger('click')

        const v = wrapper.find( '[data-tesId2="Counter"]').text()

        expect(v).toBe('0') */

        //refactorizacion

        
        const [ btnIncrease , btnDecrease ] = wrapper.findAll('button')

        await btnIncrease.trigger('click') 

        await btnDecrease.trigger('click')
        await btnDecrease.trigger('click')

        const v = wrapper.find( '[data-tesId2="Counter"]').text()

        expect(v).toBe('0')  

    })

    test ('test with props ',()=>{
        const {start } =wrapper.props()

        const val = wrapper.find('[data-tesId2="Counter"]').text()

        expect(Number(val)).toBe(start)
    })

   /*  test('debe mostrar el prop Name',()=>{

        const nameC = 'Ahh'
        const wrapper = shallowMount(counter, {
            props:{
                nameC
            }
        })  
        console.log(wrapper.props())
        expect (wrapper.find('[data-testId="nameC"]').text()).toBe( nameC)
    }) */
})