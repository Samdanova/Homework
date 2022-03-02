fetch("https://api.github.com/users/Samdanova") 
.then(response => response.json()) 
.then(user=> console.log(user));