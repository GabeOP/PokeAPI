let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let img = document.getElementById('img')
let atq = document.getElementById('atq')

function pokeAPI(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${txt.value}`)
    .then((response) => response.json())
    .then((corpo) => {
        console.log(corpo)
        res.innerHTML = `${corpo.name} #${corpo.id}` ;
        img.setAttribute('src', corpo.sprites.front_default);
        for(let i= 0; i<corpo.abilities.length; i++){
            atq.innerHTML += `${corpo.abilities[i].ability.name} <br>`
        }
        
    })
}


btn.addEventListener('click',  pokeAPI)
    
       
