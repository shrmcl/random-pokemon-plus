// stackoverflow random number code
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNum = randomIntFromInterval(1, 100);
let endpoint = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;


fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        const pokeName = data.name;
        const pokeImg = data.sprites.other.dream_world.front_default;
        const pokeHeight = data.height
        const pokeWeight = data.weight

        const display = document.getElementById('pokes');
        const newImg = document.createElement('img');
        const newH1 = document.createElement('h1');
        const newP_weight = document.createElement('p');
        const newP_height = document.createElement('p');

        newImg.src = pokeImg;
        newH1.innerHTML = pokeName;
        newP_height.innerHTML = pokeHeight;
        newP_weight.innerHTML = pokeWeight;

        display.append(newImg);
        display.append(newH1);
        display.append(newP_weight);
        display.append(newP_height);

        // console.log('the data = ', data, 
        //     'the name = ', data.name,
        //     'the species = ', data.species.name,
        //     'img = ', data.sprites.other.dream_world.front_default
        //     )
    })