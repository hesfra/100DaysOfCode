let array =[1,4,25,623,15,21,57,52,50]

array.forEach(item=> {
    if(item % 2 ===0){
    console.log(`o número ${item} é divisivel por 2`)
 }else if(item % 3 === 0) {
     console.log(`o número ${item} é divisivel por 3 `)
 }else if(item % 5===0){
     console.log(`o número ${item} é divisivel por 5`)
 }   else console.log(`o numero ${item} não é divisivel pelas opções`)
})