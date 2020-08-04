import {shuffle} from './functions'

const changeArray = [
    {txt: 'заменяет', py: 'a[i] = ', pas: 'a[i]:=', cpp: 'a[i]=',bas:'A(I):=', alg: 'a[i]:='},
    {txt: 'увеличивает', py: 'a[i] = a[i]+', pas: 'a[i]:=a[i]+', cpp: 'a[i] = a[i]+', bas: 'A(I):=A(I)+', alg: 'a[i]:=a[i]+'},
    {txt: 'уменьшает', py: 'a[i] = a[i]-', pas: 'a[i]:=a[i]-', cpp: 'a[i] = a[i]-', bas: 'A(I):=A(I)-', alg: 'a[i]:=a[i]-'}
]
    
export default shuffle(changeArray)[0]