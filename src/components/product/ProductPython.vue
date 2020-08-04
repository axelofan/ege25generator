<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'product-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k = 1<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = k*a[i]
                `
        }
    }
}
</script>

<style/>