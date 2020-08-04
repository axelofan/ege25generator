import {getRndN, getBool, shuffle} from './functions'

let inequalityArray = [
    {n: 100*getRndN(1,5),
    not: getBool(),
    get txt(){return this.not ? `не менее ${this.n}` : `больше ${this.n}`},
    get py(){return this.not ? `a[i]>=${this.n}` : `a[i]>${this.n}`},
    get pas(){return this.not ? `(a[i]>=${this.n})` : `(a[i]>${this.n})`},
    get cpp(){return this.not ? `a[i]>=${this.n}` : `a[i]>${this.n}`},
    get bas(){return this.not ? `A(I)>=${this.n}` : `A(I)>${this.n}`},
    get alg(){return this.not ? `a[i]>=${this.n}` : `a[i]>${this.n}`}},

    {n: 100*getRndN(6,10),
    not: getBool(),
    get txt(){return this.not ? `не более ${this.n}` : `меньше ${this.n}`},
    get py(){return this.not ? `a[i]<=${this.n}` : `a[i]<${this.n}`},
    get pas(){return this.not ? `(a[i]<=${this.n})` : `(a[i]<${this.n})`},
    get cpp(){return this.not ? `a[i]<=${this.n}` : `a[i]<${this.n}`},
    get bas(){return this.not ? `A(I)<=${this.n}` : `A(I)<${this.n}`},
    get alg(){return this.not ? `a[i]<=${this.n}` : `a[i]<${this.n}`}},

    {n1: 100*getRndN(1,4),
    n2: 100*getRndN(5,10),
    get txt(){return `находятся в интервале [${this.n1}; ${this.n2}]`},
    get py(){return `${this.n1}<=a[i]<=${this.n2}`},
    get pas(){return `(a[i]>=${this.n1}) and (a[i]<=${this.n2})`},
    get cpp(){return `a[i]>=${this.n1} && a[i]<=${this.n2}`},
    get bas(){return `A(I)>=${this.n1} AND A(I)<=${this.n2}`},
    get alg(){return `a[i]>=${this.n1} и a[i]<=${this.n2}`}},

    {get txt(){return `двузначны`},
    get py(){return `10<=a[i]<100`},
    get pas(){return `(a[i]>=10) and (a[i]<100)`},
    get cpp(){return `a[i]>=10 && a[i]<100`},
    get bas(){return `A(I)>=10 AND A(I)<100`},
    get alg(){return `a[i]>=10 и a[i]<100`}}
]

//условия с СС8 и СС16 могут выпасть только в 1 из 20 задач
if(Math.random()<0.05) {
    inequalityArray.push({
        get txt(){return `содержат 2 цифры в восьмеричной записи`},
        get py(){return `8<=a[i]<64`},
        get pas(){return `(a[i]>=8) and (a[i]<64)`},
        get cpp(){return `a[i]>=8 && a[i]<64`},
        get bas(){return `A(I)>=8 AND A(I)<64`},
        get alg(){return `a[i]>=8 и a[i]<64`}})

    inequalityArray.push({
        get txt(){return `содержат 2 цифры в шестнадцатеричной записи`},
        get py(){return `16<=a[i]<256`},
        get pas(){return `(a[i]>=16) and (a[i]<256)`},
        get cpp(){return `a[i]>=16 && a[i]<256`},
        get bas(){return `A(I)>=16 AND A(I)<256`},
        get alg(){return `a[i]>=16 и a[i]<256`}
    })
}

export default shuffle(inequalityArray)[0]