<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'change-python',
    props: ['condition', 'change'],
    data: function(){
        return {
            text:
                `
                <p>for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if ${this.condition}:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.change}</p>
                `
        }
    }
}
</script>

<style/>