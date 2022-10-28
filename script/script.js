let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let img = document.getElementById('img')

function pokeAPI(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${txt.value}`)
    .then((response) => response.json())
    .then((corpo) => {
        console.log(corpo)
        res.innerHTML = corpo.name;
        img.setAttribute('src', corpo.sprites.front_default)
    })
}

btn.addEventListener('click',  pokeAPI)
    
       
