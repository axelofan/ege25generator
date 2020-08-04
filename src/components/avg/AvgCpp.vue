<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'avg-cpp',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>k = 0;<br>
                for (i=0; i&#60;N; ++i) {<br>
                &nbsp;&nbsp;&nbsp;if (${this.condition})<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = k+1;<br>
                }<br>
                m = 0;<br>
                for (i=0; i&#60;N; ++i) {<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = m+a[i];<br>
                }</p>
                `
        }
    }
}
</script>

<style/>