<template>
    <div class='code'>
        <component v-bind:is=answer.type v-bind:condition=answer.condition1 />
        <change-cpp v-bind:condition=answer.condition2 v-bind:change=answer.change />
        <print-cpp v-bind:cycle=answer.output />
    </div>
</template>

<script>
import CountCpp from './count/CountCpp'
import SumCpp from './sum/SumCpp'
import MinCpp from './min/MinCpp'
import MaxCpp from './max/MaxCpp'
import AvgCpp from './avg/AvgCpp'
import ProductCpp from './product/ProductCpp'
import ChangeCpp from './change/ChangeCpp'
import PrintCpp from './print/PrintCpp'

export default {
    name: 'answer-cpp',
    props: ['answer'],
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CountCpp, SumCpp, MinCpp, MaxCpp, AvgCpp, ProductCpp, ChangeCpp, PrintCpp
    },
    data: function(){
        return {}
    }
}
</script>

<style/>