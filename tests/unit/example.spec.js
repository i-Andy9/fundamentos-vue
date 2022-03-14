describe('example Component', ()=>{
   
  test('=>10',  () => { 
    
    //arreglar 
    let arr = 19;

    //estimulo
    arr = arr +1

    //assert
    expect (arr).toBeGreaterThan(10)
  })
})