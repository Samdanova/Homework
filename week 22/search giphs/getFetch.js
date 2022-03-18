document.getElementById("button").addEventListener("click",onSearch);

function onSearch () {
    document.getElementById("img-container").innerHTML="";
let getGiphy=document.getElementById("giphy").value;

fetch(`https://api.giphy.com/v1/gifs/search?api_key=4qLEtTVYUtzxCzLuOmTTRnmzELVyHypv&q=`+getGiphy+`&limit=5&offset=0&rating=g&lang=en`)
.then(response=>response.json())
.then(gif=> {
    try{
    console.log (gif.data.length)
    for( let i = 0; i< gif.data.length; i++){
        createGifs(gif.data[i]);
    }
    if ((gif.data.length)==0) {
                throw new Error("По такому запросу ничего не найдено");
            }
    }catch (e) {
            alert (e.message);
            }
})
.catch(error=>console.log("Сервер недоступен:",error))
}


function createGifs (gifs) {
    let div=document.getElementById("img-container");
    let img = div.appendChild(document.createElement('img'));
    img.src = gifs.images.original.url;
    img.classList.add('giphy-item');
}
