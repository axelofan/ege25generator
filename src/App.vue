<template>
  <div id="app">
    <p><span class='number'>25</span> Дан целочисленный массив из 100 элементов. Элементы массива могут принимать целые значения от 0 до 10 000 включительно. Опишите на одном из языков программирования алгоритм, который находит {{txt.find}} массива, которые {{txt.condition1}}, а затем {{txt.change}} элементы, которые {{txt.condition2}} на число, равное найденному значению. {{txt.warranty}} <span v-if=txt.isAvg>Гарантируется, что среднее арифметическое является целым числом.</span> {{txt.output}}
    </p>
    <p>Исходные данные объявлены так, как показано ниже. Запрещается использовать переменные, не описанные ниже, но разрешается не использовать некоторые из описанных переменных.
    </p>
    <br>
    <start-source/>
  <br>
  Примерное решение на 
  <span class='hintButton' @click='answer = "bas"'>Бейсик</span>, 
  <span class='hintButton' @click='answer = "py"'>Python</span>, 
  <span class='hintButton' @click='answer = "alg"'>Алгоритмическом языке</span>, 
  <span class='hintButton' @click='answer = "pas"'>Паскаль</span> и 
  <span class='hintButton' @click='answer = "cpp"'>C++</span><br>
  <!--Решение на Basic-->
  <answer-bas v-if='answer=="bas"' :answer=bas />

  <!--Решение на Python-->
  <answer-python v-if='answer=="py"' :answer=py />

  <!--Решение на Алгоритмическом языке-->
  <answer-alg v-if='answer=="alg"' :answer=alg />
  
  <!--Решение на Паскаль-->
  <answer-pascal v-if='answer=="pas"' :answer=pas />

  <!--Решение на C++-->
  <answer-cpp v-if='answer=="cpp"' :answer=cpp />

  </div>
</template>

<script>
import data from './js/generator'

import StartSource from './components/StartSource'
import AnswerBas from './components/AnswerBas'
import AnswerPython from './components/AnswerPython'
import AnswerAlg from './components/AnswerAlg'
import AnswerPascal from './components/AnswerPascal'
import AnswerCpp from './components/AnswerCpp'

export default {
  name: 'App',
  data: function(){
    return {...data,answer:''}
  },
  components: {
    StartSource, AnswerBas, AnswerPython, AnswerAlg, AnswerPascal, AnswerCpp
  }
}
</script>

<style src='./App.css'/>