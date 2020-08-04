<template>
    <div class='code'>
        <component v-bind:is=answer.type v-bind:condition=answer.condition1 />
        <change-alg v-bind:condition=answer.condition2 v-bind:change=answer.change />
        <print-alg v-bind:cycle=answer.output />
    </div>
</template>

<script>
import CountAlg from './count/CountAlg'
import SumAlg from './sum/SumAlg'
import MinAlg from './min/MinAlg'
import MaxAlg from './max/MaxAlg'
import AvgAlg from './avg/AvgAlg'
import ProductAlg from './product/ProductAlg'
import ChangeAlg from './change/ChangeAlg'
import PrintAlg from './print/PrintAlg'

export default {
    name: 'answer-alg',
    props: ['answer'],
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CountAlg, SumAlg, MinAlg, MaxAlg, AvgAlg, ProductAlg, ChangeAlg, PrintAlg
    },
    data: function(){
        return {}
    }
}
</script>

<style/>