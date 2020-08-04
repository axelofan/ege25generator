<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'change-alg',
    props: ['condition', 'change'],
    data: function(){
        return {
            text:
                `
                <p>нц для i от 1 до n<br>
                &nbsp;&nbsp;&nbsp;если ${this.condition} то<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.change}<br>
                &nbsp;&nbsp;&nbsp;всё<br>
                кц</p>
                `
        }
    }
}
</script>

<style/>