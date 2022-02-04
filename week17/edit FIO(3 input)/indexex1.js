let splitFio = 0;
let fio;


let Split = () =>{
let name;
let surname;
let secondname;
fio = document.getElementById("maininput").value;
splitFio = fio.split(' ');

surname = splitFio[0];
surname=surname[0].toUpperCase()+surname.slice(1).toLowerCase();
document.getElementById("surname").value=surname;

name = splitFio[1];
name=name[0].toUpperCase()+name.slice(1).toLowerCase();
document.getElementById("name").value=name;

secondname=splitFio[2];
secondname=secondname[0].toUpperCase()+secondname.slice(1).toLowerCase();
document.getElementById("secondname").value=secondname;
}

button.addEventListener("click", Split)