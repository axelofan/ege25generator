<template>
    <div class='code'>
        <component v-bind:is=answer.type v-bind:condition=answer.condition1 />
        <change-bas v-bind:condition=answer.condition2 v-bind:change=answer.change />
        <print-bas v-bind:cycle=answer.output />
    </div>
</template>

<script>
import CountBas from './count/CountBas'
import SumBas from './sum/SumBas'
import MinBas from './min/MinBas'
import MaxBas from './max/MaxBas'
import AvgBas from './avg/AvgBas'
import ProductBas from './product/ProductBas'
import ChangeBas from './change/ChangeBas'
import PrintBas from './print/PrintBas'

export default {
    name: 'answer-bas',
    props: ['answer'],
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CountBas, SumBas, MinBas, MaxBas, AvgBas, ProductBas, ChangeBas, PrintBas
    },
    data: function(){
        return {}
    }
}
</script>

<style/>