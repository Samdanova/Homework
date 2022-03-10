document.getElementById("button").addEventListener("click",onSearch);
function onSearch () {
    document.getElementById("img-container").innerHTML="";
let getGiphy=document.getElementById("giphy").value;
fetch(`https://api.giphy.com/v1/gifs/search?api_key=4qLEtTVYUtzxCzLuOmTTRnmzELVyHypv&q=`+getGiphy+`&limit=5&offset=0&rating=g&lang=en`)
.then(response=>response.json())
.then(gif=> {
    for( let i = 0; i< gif.data.length; i++){
        createGifs(gif.data[i])
} 
})
.catch(error=>console.log(error))
}

function createGifs (gifs) {
    let div=document.getElementById("img-container");
    let img = div.appendChild(document.createElement('img'));
    img.src = gifs.images.original.url;
    img.classList.add('giphy-item');
}
