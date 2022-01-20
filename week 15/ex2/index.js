

function validate(){
	let a = document.forms["nannyForm"]["name"].value;
  if (a == "") {
	alert("Укажите ваше имя");
	return false;
  }
  let b = document.forms["nannyForm"]["surname"].value;
  if (b == "") {
	alert("Укажите вашу фамилию");
	return false;
  }
  let с = document.forms["nannyForm"]["email"].value;
  if (с == "") {
	alert("Укажите ваш Е-майл");
	return false;
  }
  let d = document.forms["nannyForm"]["mobile"].value;
  if (d == "") {
	alert("Укажите ваш телефон");
	return false;
  }
  let f = document.forms["nannyForm"]["child"].value;
  if (f == "") {
	alert("Укажите имя вашего ребенка");
	return false;
  }
  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
	alert("Укажите город");
	return false;
  }
  }

  registerbtn.addEventListener("click", let = () =>  {
    let name = document.getElementById("name");
    let surname=document.getElementById("surname");
    let email=document.getElementById("email");
    let mobile=document.getElementById("mobile");
    let child=document.getElementById("child");
    let city=document.getElementById("city");
    let checked=document.getElementById("checked");
    if ((name.value !="") && (surname.value !="") && (email.value !="")&& (mobile.value !="")&& (child.value !="")&& (city.value !="")&& (checked.value!="")){
    let x = document.getElementById("name").value
    alert(`Привет, ${x}!`)}})
  