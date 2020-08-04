<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'change-pascal',
    props: ['condition', 'change'],
    data: function(){
        return {
            text:
                `
                <p>for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition} then<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.change};</p>
                `
        }
    }
}
</script>

<style/>