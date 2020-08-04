<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'change-cpp',
    props: ['condition', 'change'],
    data: function(){
        return {
            text:
                `
                <p>for (i=0; i&#60;N; ++i) {<br>
                &nbsp;&nbsp;&nbsp;if (${this.condition})<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.change};<br>
                }</p>
                `
        }
    }
}
</script>

<style/>