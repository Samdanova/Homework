class Calculator {
    static multip(number1, number2) {
        return number1*number2;
      }
    static plus(number1, number2) {
        return number1+number2;
      }
      static minus(number1, number2) {
        return number1-number2;
      }
      static del(number1, number2) {
            return number1/number2;
        }
    
}

function multip(){
    let number1=document.getElementById('mult1').value;
    let number2=document.getElementById('mult2').value;
    document.getElementById('result').innerHTML = Calculator.multip(number1,number2);
}

function del(){
    let number1=document.getElementById('del1').value;
    let number2=document.getElementById('del2').value;
    if (number2==0) {
        alert("На 0 делить нельзя");
    document.getElementById('result2').innerHTML = "На 0 делить нельзя"
        }
        else {
            document.getElementById('result2').innerHTML = Calculator.del(number1,number2);
}

}

function plus(){
    let number1=document.getElementById('plus1').value;
    let number2=document.getElementById('plus2').value;
    document.getElementById('result3').innerHTML = Calculator.plus(number1,number2);
}
function minus(){
    let number1=document.getElementById('minus1').value;
    let number2=document.getElementById('minus2').value;
    document.getElementById('result4').innerHTML = Calculator.minus(number1,number2);
}