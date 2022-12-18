let endpoint = 'https://pokeapi.co/api/v2/pokemon/ditto'

fetch(endpoint).then((res) => res.json()).then((data) => console.log('the data = ', data))