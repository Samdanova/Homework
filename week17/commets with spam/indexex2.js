
function checkSpam() {
  let str = document.getElementById("message-text").value;
    let lowerStr = str.toLowerCase();
  let changeStr;
    if (lowerStr.includes('viagra'))  {
       changeStr=lowerStr.replace(/viagra/g,"***");
       return changeStr;
      }
    else {
          if( lowerStr.includes('xxx')){
            changeStr=lowerStr.replace(/xxx/g,"***");
            return changeStr;
          }
          else { 
            return str;};
        }
    }



let sendMessage = () => {
  let clearComent=checkSpam();
  let div=document.createElement('div')
div.innerHTML=clearComent;
div.className="text";
textarea.appendChild(div);
document.getElementById('message-text').value=" ";
}
// function update() {
//       send_request('load');
//     }
//     interval = setInterval(update,500);

submit.addEventListener('click',checkSpam);
submit.addEventListener('click',sendMessage);
// submit.addEventListener('click',update);