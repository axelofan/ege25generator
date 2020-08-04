<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'print-pascal',
    props: ['cycle'],
    data: function(){
        return {
            text:
                `
                <p>${this.cycle}<br>
                &nbsp;&nbsp;&nbsp;writeln(a[i]);</p>
                `
        }
    }
}
</script>

<style/>