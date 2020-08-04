<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'count-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                k=0<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = k+1
                `
        }
    }
}
</script>

<style/>