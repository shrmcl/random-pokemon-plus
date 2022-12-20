// stackoverflow random number code
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const display = document.getElementById('pokes');
const newImg = document.createElement('img');
const newH1 = document.createElement('h1');
const newP_weight = document.createElement('p');
const newP_height = document.createElement('p');
display.append(newImg, newH1, newP_height, newP_weight)

function changePoke() {
    let randomNum = randomIntFromInterval(1, 100);
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;      
    
    fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log('fetched data: ', data);
        const pokeImg = data.sprites.other.dream_world.front_default;
        const pokeName = data.name;
        const pokeHeight = data.height
        const pokeWeight = data.weight
        
        newImg.src = pokeImg;
        newImg.className = "pokemonImg";
        newH1.innerHTML = pokeName;
        newP_height.innerHTML = `height: ${pokeHeight}`;
        newP_weight.innerHTML = `weight: ${pokeWeight}`;
    })
}

// wait for page to load before fetching data
window.addEventListener('load', () => {
    // inital pokemon on load
    changePoke();
    // change pokemons over time
    setInterval(changePoke, 3000)
})