// Clicar no pokemon da listagem eu quero que mude a pokedex
// ao clicar muda a class da div para (ativo)

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
console.log(listaSelecaoPokemons);
const pokemonsCard = document.querySelectorAll('.cartao__pokemon')
console.log(pokemonsCard)

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // removendo uma classe da div
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        
        //pegando o id do elemento - pokemon
        const idPokemonSelecionado = pokemon.attributes.id.value
        

        // colocando uma classe na div 
        const idDoCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonAbrir =  document.getElementById(idDoCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        const pokemonAtivoLista = document.querySelector('.ativo')
        pokemonAtivoLista.classList.remove('ativo')

        const pokemonSelecionadoLista = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoLista.classList.add('ativo')
    } )
})