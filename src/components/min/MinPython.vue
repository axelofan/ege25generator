<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'min-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m = 10001<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if a[i]&#60;m and (${this.condition}):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = a[i]<br>
                if m==10001: m = 0</p>
                `
        }
    }
}
</script>

<style/>