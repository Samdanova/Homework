postButton.addEventListener("click",function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let indexTypeCat=document.getElementById("typeCat").options.selectedIndex;
let typeCat=document.getElementById("typeCat").options[indexTypeCat].value;
formData.set('typeCat',typeCat);
let food=" ";
let eat = document.getElementsByName('eat');
for (let i = 0; eat[i]; i++) {
    if (eat[i].checked) {
    food=`${eat[i].value} ${food}`;
            }
}
formData.set('food',food);
let sex=null;
let radio = document.querySelectorAll('.sexAn');
for (let i = 0; radio[i]; i++) {
    if (radio[i].checked) {
    sex=radio[i].value;
    break;
            }
}
formData.set('sex',sex);
let note=document.getElementById("note").value;
formData.set('comment',note);
fetch("https://httpbin.org/post",{
method:'POST',
body: formData,
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    alert('Все данные успешно отправлены на сервер!');
})
.catch(error=>console.log(error))
})

