<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'print-alg',
    props: ['cycle'],
    data: function(){
        return {
            text:
                `
                <p>${this.cycle}<br>
                &nbsp;&nbsp;&nbsp;вывод a[i]<br>
                кц</p>
                `
        }
    }
}
</script>

<style/>