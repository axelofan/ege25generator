<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'min-alg',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m:= 10001<br>
                нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если a[i]&#60;m и (${this.condition}) то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m:= a[i]<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц<br>
                если m=10001 то m:= 0 всё</p>
                `
        }
    }
}
</script>

<style/>