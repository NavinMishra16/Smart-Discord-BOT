// Tenor GIF Reply 

let url = `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`;
let responce = await fetch(url);
let json =   await responce.json();
console.log(json);
const index = Math.floor(Math.random()* json.results.length);