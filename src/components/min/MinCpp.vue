<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'min-cpp',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m = 10001;<br>
                for (i=0;i&#60;N;++i) {<br>
                &nbsp;&nbsp;&nbsp;if (a[i]&#60;m && (${this.condition}))<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = a[i];<br>
                }<br>
                if (m=10001) m= 0;</p>
                `
        }
    }
}
</script>

<style/>