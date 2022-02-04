

/*let str = "430p.";
let arr="0123456789";
let num="";
function Value(str) {
    for(let i = 0; i < str.length; i++) {
      if (arr.indexOf(str[i])!==-1) {
        num=num+str[i];
      }
    }
    console.log(num);
  }
Value(str);*/

let str = "430p.";
let arr="0123456789";
let num="";
function Value(str) {
    for(let char of str) {
      if (arr.indexOf(char)!==-1) {
        num=num+char;
      }
    }
    console.log(num);
  }
Value(str);


let today= new Date();
let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
let left = Math.round((tomorrow-today)/1000);
alert(left);

/*let str = "99€";
let num=0;
function Value() {
    for(let i = 0; i < str.length; i++) {
      if(Number.isNaN(Number(str[i])) ){
        num=str.slice(0,i);
      }
    }
    console.log(num);
  }
Value(str);*/