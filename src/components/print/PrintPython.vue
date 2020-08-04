<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'print-python',
    props: ['cycle'],
    data: function(){
        return {
            text:
                `
                <p>${this.cycle}<br>
                &nbsp;&nbsp;&nbsp;print(a[i])</p>
                `
        }
    }
}
</script>

<style/>