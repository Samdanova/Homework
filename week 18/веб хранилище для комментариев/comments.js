//имя появляется при обнов
function save() {
  let Name= localStorage.getItem('name');
  if (Name != null) {
    document.getElementById("author").value=Name;
  }
}
document.addEventListener("DOMContentLoaded", save)

//загружаем изображение и сохраняем
document.querySelector('#myPhoto').addEventListener("change", ()=>{
  let reader=new FileReader();
  reader.addEventListener("load", ()=> {
    localStorage.setItem("recent-image", reader.result)
  })
  reader.readAsDataURL(document.querySelector('input[type=file]').files[0]);
})

//добавляем изображение
document.addEventListener("DOMContentLoaded", ()=>{
const Image=localStorage.getItem("recent-image");
if (Image) {
  document.querySelector("#imgPreview").setAttribute("src",Image);
}
});

let checkSpam=()=> {
  let str = document.getElementById("message-text").value;
  let lowerStr = str.toLowerCase();
  let changeStr;
    if (lowerStr.includes('viagra')||(lowerStr.includes('xxx')))  {
      changeStr=lowerStr.replace(/viagra|xxx/g,"***");
      return changeStr;
      }
          else { 
            return str;};
    }

let sendMessage = () => {
  let clearComent=checkSpam();
  let div=document.createElement('div')
  let author=document.getElementById("author").value;
  let photo=document.getElementById("imgPreview").src;
  localStorage.setItem ('comment', clearComent);
  localStorage.setItem('name', author);
div.innerHTML+=`<img class='photoInChat' src="${photo}"<span class='author'>${author}:</span><span class='text'>${clearComent}</span>`;
div.className="message";
textarea.appendChild(div);
document.getElementById('message-text').value=" ";
let comment=document.querySelector(".message");
localStorage.setItem ('text', comment);
}

submit.addEventListener('click',sendMessage);

