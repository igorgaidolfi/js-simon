function randomArrayGen(NUMBERS){
    let array = []
    for(let i=0; i<NUMBERS; i++){
        array.push(Math.floor(Math.random() * 100) + 1)
    }
    return array
}
const randNum = 5
let randArr = randomArrayGen(randNum)