import {shuffle, getBool, getRndN} from './functions'

let divideArray = [
    {not : getBool(),
    get txt(){return this.not ? `не чётны` : `чётны`},
    get py(){return this.not ? `a[i]%2!=0` : `a[i]%2==0`},
    get pas(){return this.not ? `(a[i] mod 2 <> 0)` : `(a[i] mod 2=0)`},
    get cpp(){return this.not ? `a[i]%2!=0` : `a[i]%2==0`},
    get bas(){return this.not ? `A(I) MOD 2 <> 0` : `A(I) MOD 2=0`},
    get alg(){return this.not ? `mod(a[i],2) <> 0` : `mod(a[i], 2) = 0`}},

    {n: getRndN(3,15),
    not: getBool(),
    get txt(){return this.not ? `не кратны ${this.n}` : `кратны ${this.n}`},
    get py(){return this.not ? `a[i]%${this.n}!=0` : `a[i]%${this.n}==0`},
    get pas(){return this.not ? `(a[i] mod ${this.n}<>0)` : `(a[i] mod ${this.n}=0)`},
    get cpp(){return this.not ? `a[i]%${this.n}!=0` : `a[i]%${this.n}==0`},
    get bas(){return this.not ? `A(I) MOD ${this.n} <> 0` : `A(I) MOD ${this.n}=0`},
    get alg(){return this.not ? `mod(a[i],${this.n}) <> 0` : `mod(a[i], ${this.n}) = 0`}},

    {n: getRndN(1,9),
    not: getBool(),
    get txt(){return this.not ? `не оканчиваются на ${this.n}` : `оканчиваются на ${this.n}`},
    get py(){return this.not ? `a[i]%10!=${this.n}` : `a[i]%10==${this.n}`},
    get pas(){return this.not ? `(a[i] mod 10<>${this.n})` : `(a[i] mod 10=${this.n})`},
    get cpp(){return this.not ? `a[i]%10!=${this.n}` : `a[i]%10==${this.n}`},
    get bas(){return this.not ? `A(I) MOD 10<>${this.n}` : `A(I) MOD 10=${this.n}`},
    get alg(){return this.not ? `mod(a[i],10) <> ${this.n}` : `mod(a[i], 10) = ${this.n}`}}
]

//условия с СС8 и СС16 могут выпасть только в 1 из 20 задач
if(Math.random()<0.05) {
    divideArray.push({
        n: getRndN(1,16),
        get nt() {return Number( this.n ).toString(16).toUpperCase()},
        not: getBool(),
        get txt(){return this.not ? `в шестнадцатеричной записи не оканчиваются на ${this.nt}` : `в шестнадцатеричной записи оканчиваются на ${this.nt}`},
        get py(){return this.not ? `a[i]%16!=${this.n}` : `a[i]%16==${this.n}`},
        get pas(){return this.not ? `(a[i] mod 16<>${this.n})` : `(a[i] mod 16=${this.n})`},
        get cpp(){return this.not ? `a[i]%16!=${this.n}` : `a[i]%16==${this.n}`},
        get bas(){return this.not ? `A(I) MOD 16<>${this.n}` : `A(I) MOD 16=${this.n}`},
        get alg(){return this.not ? `mod(a[i],16) <> ${this.n}` : `mod(a[i], 16) = ${this.n}`}
    })
    
    divideArray.push({
        n: getRndN(1,7),
        not: getBool(),
        get txt(){return this.not ? `в восьмеричной записи не оканчиваются на ${this.n}` : `в восьмеричной записи оканчиваются на ${this.n}`},
        get py(){return this.not ? `a[i]%8!=${this.n}` : `a[i]%8==${this.n}`},
        get pas(){return this.not ? `(a[i] mod 8<>${this.n})` : `(a[i] mod 8=${this.n})`},
        get cpp(){return this.not ? `a[i]%8!=${this.n}` : `a[i]%8==${this.n}`},
        get bas(){return this.not ? `A(I) MOD 8<>${this.n}` : `A(I) MOD 8=${this.n}`},
        get alg(){return this.not ? `mod(a[i],8) <> ${this.n}` : `mod(a[i], 8) = ${this.n}`}
    })
}

divideArray = shuffle(divideArray)
export default [ divideArray[0], divideArray[1] ]