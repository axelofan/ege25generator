<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'max-pascal',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m:= -1;<br>
                for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;if (a[i]&#62;m) and (${this.condition}) then<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m:= a[i];<br>
                if m=-1 then m:= 0;</p>
                `
        }
    }
}
</script>

<style/>