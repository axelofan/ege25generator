<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'sum-bas',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>K:= 0<br>
                FOR I=1 TO N<br>
                &nbsp;&nbsp;&nbsp;IF ${this.condition} THEN<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K:= K+A(I)<br>
                NEXT I</p>
                `
        }
    }
}
</script>

<style/>