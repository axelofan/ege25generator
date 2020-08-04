//функция перетасовки массива Fisher-Yates Shuffle
function shuffle(array) {
    let m = array.length
    while (m > 0) {
       let i = Math.floor(Math.random() * m--)
       let t = array[m]
       array[m] = array[i]
       array[i] = t
    }
    return array
}
  
//функция создания случайных челых чисел из интервала [a;b]
let getRndN = (min, max) => Math.floor(min + Math.random() * (max + 1 - min)) 
  
//функция получения случайного логического значения
let getBool = () => Math.random()<0.5

export {shuffle, getRndN, getBool}
