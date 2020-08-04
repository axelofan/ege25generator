<template>
    <div class='code'>
        <component v-bind:is=answer.type v-bind:condition=answer.condition1 />
        <change-pascal v-bind:condition=answer.condition2 v-bind:change=answer.change />
        <print-pascal v-bind:cycle=answer.output />
    </div>
</template>

<script>
import CountPascal from './count/CountPascal'
import SumPascal from './sum/SumPascal'
import MinPascal from './min/MinPascal'
import MaxPascal from './max/MaxPascal'
import AvgPascal from './avg/AvgPascal'
import ProductPascal from './product/ProductPascal'
import ChangePascal from './change/ChangePascal'
import PrintPascal from './print/PrintPascal'

export default {
    name: 'answer-pascal',
    props: ['answer'],
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CountPascal, SumPascal, MinPascal, MaxPascal, AvgPascal, ProductPascal, ChangePascal, PrintPascal
    },
    data: function(){
        return {}
    }
}
</script>

<style/>