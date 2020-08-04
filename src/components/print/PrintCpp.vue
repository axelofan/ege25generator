<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'print-cpp',
    props: ['cycle'],
    data: function(){
        return {
            text:
                `
                <p>${this.cycle}<br>
                &nbsp;&nbsp;&nbsp; cout << a[i];</p>
                `
        }
    }
}
</script>

<style/>