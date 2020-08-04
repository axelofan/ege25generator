<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'sum-alg',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k:= 0<br>
                нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если ${this.condition} то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k:= k+a[i]<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц</p>
                `
        }
    }
}
</script>

<style/>