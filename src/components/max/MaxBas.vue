<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'max-bas',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>M:= -1<br>
                FOR I=1 TO N<br>
                &nbsp;&nbsp;&nbsp;IF A(I)&#62;M AND (${this.condition}) THEN<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M:= A(I)<br>
                NEXT I<br>
                IF M=-1 THEN M:= 0</p>
                `
        }
    }
}
</script>

<style/>