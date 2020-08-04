<template>
<table class='code'>
    <tr>
      <td><p class='header'>Бейсик</p></td>
      <td><p class='header'>Python</p></td>
    </tr>
    <tr>
      <!--Условие на Basic-->
      <td v-html=basic />
     
      <!--Условие на Python-->
      <td v-html=python />
    </tr>
    <tr>
      <td><p class='header'>Алгоритмический язык</p></td>
      <td><p class='header'>Паскаль</p></td>
    </tr>
    <tr>
      <!--Условие на алгоритмическом языке-->
      <td v-html=alg />
    
      <!--Условие на Pascal-->
      <td v-html=pas />
    </tr>
    <tr>
      <td colspan=2><p class='header'>С++</p></td>
    </tr>
    <tr>
      <!--Условие на C++-->
      <td colspan=2 v-html=cpp />
    </tr>
  </table>
</template>

<script>
export default {
    name: 'start-source',
    data: function(){
        return {
            basic:
                `
                CONST N=100<br>
                DIM A(N) AS INTEGER<br>
                DIM I, M, K AS INTEGER<br>
                FOR I = 1 TO N<br>
                &nbsp;&nbsp;&nbsp;INPUT A(I)<br>
                NEXT I<br>
                …<br>
                END
                `,
            python:
                `
                # допускается также использовать<br> 
                # две целочисленные переменные m,k<br><br> 
                a = []<br> 
                n = 100<br> 
                for i in range(n):<br> 
                &nbsp;&nbsp;&nbsp;a.append(int(input()))
                `,
            alg:
                `
                алг<br>
                нач<br>
                &nbsp;&nbsp;&nbsp;цел N=100<br>
                &nbsp;&nbsp;&nbsp;целтаб a[1:N]<br>
                &nbsp;&nbsp;&nbsp;цел i, m, k<br>
                &nbsp;&nbsp;&nbsp;нц для i от 1 до N<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ввод a[i]<br>
                &nbsp;&nbsp;&nbsp;кц<br>
                &nbsp;&nbsp;&nbsp;…<br>
                кон
                `,
            pas:
                `
                const n=100;<br>
                var a: array [1..n] of integer;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;i, m, k: integer;<br>
                begin<br>
                for i:=1 to n do<br>
                &nbsp;&nbsp;&nbsp;readln(a[i]);<br>
                …<br>
                end.<br>
                `,
            cpp:
                `
                #include &#60;iostream&#62;<br>
                using namespace std;<br>
                const int N=100;<br>
                int main(){<br>
                &nbsp;&nbsp;&nbsp;int a[N];<br>
                &nbsp;&nbsp;&nbsp;int i, m, k;<br>
                &nbsp;&nbsp;&nbsp;for (i=0; i&#60;N; ++i)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cin >> a[i];<br>
                &nbsp;&nbsp;&nbsp;…<br>
                &nbsp;&nbsp;&nbsp;return 0;<br>
                }
                `
        }
    }
}
</script>

<style/>