// 1. FUNZIONE CHE GENERA UN ARRAY DI NUMERI CASUALI
function randomArrayGen(NUMBERS){
    let array = []
    for(let i=0; i<NUMBERS; i++){
        array.push(Math.floor(Math.random() * 100) + 1)
    }
    return array
}
// 2. FUNZIONE CHE MOSTRA NELLA FINESTRA IL RISULTATO
function SimonGame(array){
    const result = document.getElementById('score')
    let points = array.length
    result.innerText = `Hai trovato in totale ${points} numeri. Ecco la lista dei numeri ${array}`
}
const randNUM = 5
let randArr = randomArrayGen(randNUM)
let result = document.getElementById('score')
result.innerText = `${randArr}`
setTimeout(function(){
    result.innerText =""
}, 950)
// 3. FUNZIONE CHE CHIEDE ALL'UTENTE DI INSERIRE I NUMERI VISTI
setTimeout(function(){
    let i = 0
    let simonArr = []
    while(i<randNUM){
        let num = parseInt(prompt(`Inserisci il ${i+1}o numero`))
        if(randArr.includes(num)){
            simonArr.push(num)
        }
        i++
    }
    SimonGame(simonArr)
}, 1000)