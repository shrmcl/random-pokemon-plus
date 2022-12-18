// stackoverflow random number code
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomNum = randomIntFromInterval(1,100)

let endpoint = `https://pokeapi.co/api/v2/pokemon/${randomNum}`

fetch(endpoint)
    .then((res) => res.json())
        .then((data) => 
            console.log('the data = ', data, 
            'the name = ', data.name,
            'the species = ', data.species.name,
            'img = ', data.sprites.other.dream_world.front_default
            )
        )