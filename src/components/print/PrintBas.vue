<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'print-bas',
    props: ['cycle'],
    data: function(){
        return {
            text:
                `
                <p>${this.cycle}<br>
                &nbsp;&nbsp;&nbsp;PRINT A(I)<br>
                NEXT I</p>
                `
        }
    }
}
</script>

<style/>