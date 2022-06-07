
function checkSpam() {
  // e.preventDefault()
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
  // e.preventDefault()
  let clearComent=checkSpam();
  let div=document.createElement('div')
div.innerHTML=clearComent;
div.className="text";
textarea.appendChild(div);
document.getElementById('message-text').value=" ";
}


submit.addEventListener('click',checkSpam);
submit.addEventListener('click',sendMessage);
