<template>
<p v-html="text"/>
</template>

<script>
export default {
    name: 'min-pascal',
    props: ['condition'],
    data: function(){
        return {
            text:
                `
                <p>m:= 10001;<br>
                for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;if (a[i]&#60;m) and (${this.condition}) then<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m:= a[i];<br>
                if m=10001 then m:= 0;</p>
                `
        }
    }
}
</script>

<style/>