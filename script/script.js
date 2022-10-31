let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let img = document.getElementById('img');
let atq = document.getElementById('atq');

function pokeAPI() {
    atq.innerHTML = ''

    fetch(`https://pokeapi.co/api/v2/pokemon/${txt.value.toLowerCase()}`)
    .then((response) => response.json())
    .then((corpo) => {
        console.log(corpo)
        res.innerHTML = `${corpo.name} #${corpo.id}`;
        img.setAttribute('src', corpo['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);
        for (let i = 0; i < corpo.abilities.length; i++) {
            atq.innerHTML += `<b>Ataque ${i+1}:</b> ${corpo.abilities[i].ability.name} <br>`
        }
    })
}

btn.addEventListener('click', pokeAPI);



