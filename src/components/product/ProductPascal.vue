<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'product-pascal',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k:= 1;<br>
                for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition} then<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k:= k*a[i];</p>
                `
        }
    }
}
</script>

<style/>