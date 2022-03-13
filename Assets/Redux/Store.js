import {createStore} from 'redux';

import pokemonReducer from './Pokemon/PokemonReducer';

// Passing burgerReducer to createStore
const store=createStore(pokemonReducer);
// const store = createStore((pokemonReducer) => {
//     console.log(pokemonReducer);
// });
export default store;
