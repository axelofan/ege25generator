<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'max-alg',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m:= -1<br>
                нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если a[i]&#62;m и (${this.condition}) то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m:= a[i]<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц<br>
                если m=-1 то m:= 0 всё</p>
                `
        }
    }
}
</script>

<style/>