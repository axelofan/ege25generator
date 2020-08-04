<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'max-python',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m = -1<br>
                for i in range(n):<br>
                &nbsp;&nbsp;&nbsp;if a[i]&#62;m and (${this.condition}):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = a[i]<br>
                if m==-1: m = 0</p>
                `
        }
    }
}
</script>

<style/>