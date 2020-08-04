<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'sum-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k = 0<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = k+a[i]</p>
                `
        }
    }
}
</script>

<style/>