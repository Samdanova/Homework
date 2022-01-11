function multip(){
    let number1=document.getElementById('mult1').value;
    let number2=document.getElementById('mult2').value;
    let result=number1*number2;
    document.getElementById('result').innerHTML = result;
}

function del(){
    let number1=document.getElementById('del1').value;
    let number2=document.getElementById('del2').value;
    let result=number1/number2;
    document.getElementById('result2').innerHTML = result;
}
function plus(){
    let number1=document.getElementById('plus1').value;
    let number2=document.getElementById('plus2').value;
    let result=+number1 + +number2;
    document.getElementById('result3').innerHTML = result;
}
function minus(){
    let number1=document.getElementById('minus1').value;
    let number2=document.getElementById('minus2').value;
    let result=number1-number2;
    document.getElementById('result4').innerHTML = result;
}