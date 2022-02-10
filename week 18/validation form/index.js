
let errorCount = false;
const inputPhone = document.getElementById("phone");
function validate(){
  let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
	let a = document.forms["nannyForm"]["Name"].value;
  if(a == "") {
    document.getElementById('errName').textContent="Обязательно для заполнения";
    document.getElementById('Name').classList.add('borderErr');
    document.getElementById('Name').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errName').textContent='';
    document.getElementById('Name').classList.remove('borderErr');
    document.getElementById('Name').classList.add('inputClass');
    errorCount = false;
  }
  let b = document.forms["nannyForm"]["LastName"].value;
  if(b == "") {
    document.getElementById('errSurname').textContent="Обязательно для заполнения";
    document.getElementById('LastName').classList.add('borderErr');
    document.getElementById('LastName').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errSurname').textContent='';
    document.getElementById('LastName').classList.remove('borderErr');
    document.getElementById('LastName').classList.add('inputClass');
    errorCount = false;
  }
  let с = document.forms["nannyForm"]["Email"].value;
  if(с == "") {
    document.getElementById('errEmail').textContent="Обязательно для заполнения";
    document.getElementById('Email').classList.add('borderErr');
    document.getElementById('Email').classList.remove('inputClass');
    errorCount = true;
  } else if( !document.getElementById('Email').value.match(mailFormat) ) {
      document.getElementById('errEmail').textContent="Неверный формат Email. Пример: example@mail.com";
      document.getElementById('Email').classList.add('borderErr');
      document.getElementById('Email').classList.remove('inputClass');
      document.getElementById('Email').value= '';
      errorCount = true;
      return false;
  } else {
    document.getElementById('errEmail').textContent='';
    document.getElementById('Email').classList.remove('borderErr');
    document.getElementById('Email').classList.add('inputClass');
    errorCount = false;
  }
  let d = document.forms["nannyForm"]["phone"].value;
  if(d == "") {
    document.getElementById('errMobile').textContent="Обязательно для заполнения";
    document.getElementById('phone').classList.add('borderErr');
    document.getElementById('phone').classList.remove('inputClass')
    errorCount = true;
  } else if( !document.getElementById('phone').value.match(phoneFormat) ) {
      document.getElementById('errMobile').textContent="Неверный формат телефона. Пример: +7 xxx xxx xx xx";
      document.getElementById('phone').classList.add('borderErr');
      document.getElementById('phone').classList.remove('inputClass');
      document.getElementById('phone').value = '';
      errorCount = true;
      return false;
  } else {
    document.getElementById('errMobile').textContent='';
    document.getElementById('phone').classList.remove('borderErr');
    document.getElementById('phone').classList.add('inputClass');
    errorCount = false;
  }
  let f = document.forms["nannyForm"]["kidsname"].value;
  if (f == "") {
    document.getElementById('errChild').textContent="Обязательно для заполнения";
    document.getElementById('kidsname').classList.add('borderErr');
    document.getElementById('kidsname').classList.remove('inputClass');
    document.getElementById('kidsname').value = '';
    errorCount = true;
  } else {
    document.getElementById('errChild').textContent='';
    document.getElementById('kidsname').classList.remove('borderErr');
    document.getElementById('kidsname').classList.add('inputClass');
    errorCount = false;
  }
  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
    document.getElementById('errCity').textContent="Обязательно для заполнения";
    document.getElementById('city').classList.add('borderErr');
    document.getElementById('city').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errCity').textContent='';
    document.getElementById('city').classList.remove('borderErr');
    document.getElementById('city').classList.add('inputClass');
    errorCount = false;
  }
  return true;
  }

  dataError = (item) => {
    if(errorCount){
      document.getElementById(item).textContent=""
    }
  }

  registerbtn.addEventListener("click", let = () =>  {
    let Name = document.getElementById("Name");
    let LastName=document.getElementById("LastName");
    let Email=document.getElementById("Email");
    let phone=document.getElementById("phone");
    let kidsname=document.getElementById("kidsname");
    let city=document.getElementById("city");
    let checked=document.getElementById("checked");
    if ((Name.value !="") && (LastName.value !="") && (Email.value !="")&& ([phone].value !="")&& (kidsname.value !="")&& (city.value !="")&& (checked.value!="")){
    let x = document.getElementById("Name").value
    alert(`Привет, ${x}!`)}})
  