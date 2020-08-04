<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'sum-pascal',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k:= 0;<br>
                for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition} then<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k:= k+a[i];</p>
                `
        }
    }
}
</script>

<style/>