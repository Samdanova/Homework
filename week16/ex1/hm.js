
let sumInput = () => {
  let arr= [] ;
  while (true){
  let number = prompt("Введите значение");
  if (number===""|| number===null|| !isFinite(number)) break;
  arr.push(+number);}
arr.sort();
alert(arr);
let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
      }
return sum;
}

alert(sumInput());
