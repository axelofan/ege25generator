<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'avg-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k = 0<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = k+1<br>
                m = 0<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = m+a[i]</p>
                `
        }
    }
}
</script>

<style/>