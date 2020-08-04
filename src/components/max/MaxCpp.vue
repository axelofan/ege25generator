<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'max-cpp',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m = -1;<br>
                for (i=0; i&#60;N; ++i) {<br>
                &nbsp;&nbsp;&nbsp;if (a[i]&#62;m && (${this.condition}))<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = a[i];<br>
                }<br>
                if (m=-1) m = 0;</p>
                `
        }
    }
}
</script>

<style/>