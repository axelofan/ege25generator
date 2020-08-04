<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'avg-alg',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k:= 0<br>
                нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если ${this.condition} то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k:= k+1<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц<br>
                m:= 0<br>
                нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если ${this.condition} то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m:= m+a[i]<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц</p>
                `
        }
    }
}
</script>

<style/>