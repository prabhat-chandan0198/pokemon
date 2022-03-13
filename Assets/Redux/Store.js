import {createStore} from 'redux';

import pokemonReducer from './Pokemon/PokemonReducer';

const store=createStore(pokemonReducer);
export default store;
