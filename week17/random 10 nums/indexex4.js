//указываем диапазон
function getRandom(min, max) {
    min = Math.round(min);
    max = Math.round(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

let AlertRandom=()=>{
let arr=[];
let min=0;
let max=0;
let sum=0;
let average=0;
let multip=1;
//заполняем рандомными числами
for (let i=0; i<11; i++){
    arr[i]= getRandom(-10,10);
}
document.getElementById("randomnumbers").innerHTML = "Cгенерировали:" + " "+ arr;
//считаем сумму элементов
for (let i=0; i<11; i++){
  sum+=arr[i]
}
document.getElementById("sum").innerHTML = "Сумма чисел" + " "+ sum;
//считаем среднее
average=(sum/arr.length).toFixed(1); //округление до 1 знака после запятой
document.getElementById("average").innerHTML = "Среднее арифметическое:" + " "+ average;
//максимальное и минимальное
min=Math.min.apply(null, arr);
max=Math.max.apply(null, arr);
document.getElementById("minnumber").innerHTML = "Минимальное значение" + " "+ min;
document.getElementById("maxnumber").innerHTML = "Максимальное значение" + " "+ max;
//Произведение
for (let i=0; i<11; i++){
  multip*=arr[i];
}
document.getElementById("multip").innerHTML = "Произведение чисел" + " "+ multip;
}

button.addEventListener("click", AlertRandom);

//
//
//