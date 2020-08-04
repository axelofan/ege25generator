<template>
    <div class='code'>
        <component v-bind:is=answer.type v-bind:condition=answer.condition1 />
        <change-python v-bind:condition=answer.condition2 v-bind:change=answer.change />
        <print-python v-bind:cycle=answer.output />
    </div>
</template>

<script>
import CountPython from './count/CountPython'
import SumPython from './sum/SumPython'
import MinPython from './min/MinPython'
import MaxPython from './max/MaxPython'
import AvgPython from './avg/AvgPython'
import ProductPython from './product/ProductPython'
import ChangePython from './change/ChangePython'
import PrintPython from './print/PrintPython'

export default {
    name: 'answer-python',
    props: ['answer'],
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CountPython, SumPython, MinPython, MaxPython, AvgPython, ProductPython, ChangePython, PrintPython
    },
    data: function(){
        return {}
    }
}
</script>

<style/>