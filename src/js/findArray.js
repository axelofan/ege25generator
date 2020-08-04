import {shuffle} from './functions'

let findArray = [
    {type: 'count', txt: 'количество элементов', var: 'k'},
    {type: 'sum', txt: 'сумму элементов', var: 'k'},
    {type: 'max', txt: 'максимальный из элементов', var: 'm'},
    {type: 'min', txt: 'минимальный из элементов', var: 'm',},
    {type: 'product', txt: 'произведение элементов', var: 'k'}
]
    
//среднее арифметическое будет выпадать с вероятностью 2%
if(Math.random()<0.05) findArray = [{type: 'avg', txt: 'среднее арифметическое элементов', var: '(m/k)'}]
    
export default shuffle(findArray)[0]