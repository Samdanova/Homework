
button.addEventListener("click",let = () =>{ 
document.getElementById('advice').innerHTML="";
fetch("https://api.adviceslip.com/advice") 
.then(response => response.json()) 
.then(data =>  {
let answer= document.getElementById('advice');
let api = document.createElement('p');
api.innerHTML = data.slip.advice;
answer.appendChild(api)
})
.catch(err => console.log(err));
});