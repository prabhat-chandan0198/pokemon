import {INSERT_POKEMON, DELETE_POKEMON, EDIT_POKEMON} from './PokemonType';
  
export const increasePokemonAction=(parameter)=>{
    return{
        type:INSERT_POKEMON,
        payload: {
            data:parameter
        }
       
    }
}

export const deletePokemonAction = (id) => {
    return{
        type:DELETE_POKEMON,
        index:id
    }
}

export const editPokemonAction = (data, index) => {
    return{
        type: EDIT_POKEMON,
        payload: {
            item: data,
            index:index
        }
        }
}