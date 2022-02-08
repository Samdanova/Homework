//первый элемент массива
let arr = ['js', 'css', 'html'];
alert(arr[0]);

//фильтрация

let mas = [0, 1, false, 2, undefined, "", 3, null];
const filteredMas = mas.filter(function(remove){
    return !(remove =="false"|| remove =="underfined"|| remove =="" ||remove =="null")
} );
alert(filteredMas); 

//индекс

let masIndex=[[1,2], [1,2,3], [1,2,3,4]];
const index=masIndex.find (el=>el.length>3);
alert(index)
