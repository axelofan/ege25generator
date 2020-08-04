import{shuffle} from './functions'
import find from './findArray'
import change from './changeArray'
import output from './outputArray'
import inequality from './inequalityArray'
import divide from './divideArray'

let andOr = shuffle([['and','и','&&'],['or','или', '||']])[0];
let conditions = [inequality, ...divide]

let getWarranty = () => {
    if (find.type!='max' && find.type!='min') return 'Гарантируется, что такие элементы в массиве есть.'
    else {
      let type = find.type=='max' ? 'максимум' : 'минимум'
      return `Если таких элементов нет, то считать ${type} равным 0.`
    }
}

let py = {
    condition1: `${conditions[0].py} ${andOr[0]} ${conditions[1].py}`,
    condition2: conditions[2].py,
    type: find.type+'-python',
    change: change.py+find.var,
    output: output.py
}

let bas = {
    condition1: `${conditions[0].bas} ${andOr[0].toUpperCase()} ${conditions[1].bas}`,
    condition2: conditions[2].bas,
    type: find.type+'-bas',
    change: change.bas+find.var.toString().toUpperCase(),
    output: output.bas
}

let alg = {
    condition1: `${conditions[0].alg} ${andOr[1]} ${conditions[1].alg}`,
    condition2: conditions[2].alg,
    type: find.type+'-alg',
    change: change.alg+find.var,
    output: output.alg
}

let pas = {
    condition1: `${conditions[0].pas} ${andOr[0]} ${conditions[1].pas}`,
    condition2: conditions[2].pas,
    type: find.type+'-pascal',
    change: change.pas+find.var,
    output: output.pas
}

let cpp = {
    condition1: `${conditions[0].cpp} ${andOr[2]} ${conditions[1].cpp}`,
    condition2: conditions[2].cpp,
    type: find.type+'-cpp',
    change: change.cpp+find.var,
    output: output.cpp
}

let txt = {
    condition1: `${conditions[0].txt} ${andOr[1]} ${conditions[1].txt}`,
    condition2: conditions[2].txt,
    find: find.txt,
    change: change.txt,
    output: output.txt,
    warranty: getWarranty(),
    isAvg: find.type=='avg'
}

export default {py, bas, alg, pas, cpp, txt}