import {shuffle} from './functions'

const outputArray = [
    {type: 'normal',
    txt: 'В качестве результата необходимо вывести изменённый массив, каждый элемент выводится с новой строчки.',
    py:'for i in range(n):',
    pas:'for i:=1 to N do',
    cpp:'for (i=0; i&#60;N; ++i)',
    bas:'FOR I=1 TO N',
    alg:'нц для i от 1 до N'},

    {type: 'reverse',
    txt: 'В качестве результата необходимо вывести изменённый массив в обратном порядке, каждый элемент выводится с новой строчки.',
    py:'for i in reverse(range(n)):',
    pas:'for i:=N downto 1 do',
    cpp:'for (i=N-1; i&#62;=0; --i)',
    bas:'FOR I=N TO 1 STEP -1',
    alg:'нц для i от N до 1 шаг -1'}
]

export default shuffle(outputArray)[0]