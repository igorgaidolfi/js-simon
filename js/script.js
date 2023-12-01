function randomArrayGen(NUMBERS){
    let array = []
    for(let i=0; i<NUMBERS; i++){
        array.push(Math.floor(Math.random() * 100) + 1)
    }
    return array
}

setTimeout(function(){
    const randNUM = 5
    let randArr = randomArrayGen(randNUM)
    let i = 0
    let simonArr = []
    while(i<randNUM){
        let num = prompt(`Inserisci il ${i+1}o numero`)
        simonArr.push(num)
        i++
    }
    console.log(simonArr)
}, 2000)