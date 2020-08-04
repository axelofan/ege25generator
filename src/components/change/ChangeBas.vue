<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'change-bas',
    props: ['condition', 'change'],
    data: function(){
        return {
            text:
                `
                <p>FOR I=1 TO N<br>
                &nbsp;&nbsp;&nbsp;IF ${this.condition} THEN<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.change}<br>
                NEXT I</p>
                `
        }
    }
}
</script>

<style/>