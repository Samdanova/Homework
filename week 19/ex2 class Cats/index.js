const sendBtn = document.getElementById("submit");
sendBtn.addEventListener('click',createObjectCat);

function createObjectCat() {
class Cats{
    constructor(nameAnimal,nameHuman,tel,typeCat,food, sex, note){
        this.nameA=nameAnimal;
        this.nameHuman=nameHuman;
        this.tel=tel;
        this.typeCat=typeCat;
        this.food=food;
        this.sex=sex;
        this.note=note;
    }
}

let nameAnimal = document.getElementById('name').value;
let nameHuman = document.getElementById('nameHuman').value;
let tel=document.getElementById("phone").value;
let indexTypeCat=document.getElementById("typeCat").options.selectedIndex;
let typeCat=document.getElementById("typeCat").options[indexTypeCat].value;

let food=" ";
let eat = document.getElementsByName('eat');
for (let i = 0; eat[i]; i++) {
    if (eat[i].checked) {
    food=`${eat[i].value} ${food}`;
            }
}

let sex=null;
let radio = document.querySelectorAll('.sexAn');
for (let i = 0; radio[i]; i++) {
    if (radio[i].checked) {
    sex=radio[i].value;
    break;
            }
}

let note=document.getElementById("note").value;


let myCat = new Cats(nameAnimal,nameHuman,tel,typeCat,food, sex, note);
    console.log("Анкета")
    console.log(`Кличка: ${myCat.nameA}`);
    console.log(`Имя хозяина: ${myCat.nameHuman}`);
    console.log(`Телефон: ${myCat.tel}`);
    console.log(`Порода: ${myCat.typeCat}`);
    console.log(`Питание: ${myCat.food}`);
    console.log(`Пол: ${myCat.sex}`);
    console.log(`Дополнительный комментарий: ${myCat.note}`); 

};



