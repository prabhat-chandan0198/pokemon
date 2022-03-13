import {INSERT_POKEMON, DELETE_POKEMON, EDIT_POKEMON} from './PokemonType';
  
export const increasePokemonAction=(parameter)=>{
    return{
        type:INSERT_POKEMON,
        payload: {
            // id: new Date().getMilliseconds(),
            data:parameter
        }
       
    }
}

export const deletePokemonAction = (id) => {
    // console.log(id, "check id");
    return{
        type:DELETE_POKEMON,
        index:id
    }
}

export const editPokemonAction = (data, index) => {
    // console.log(data, index);
    return{
        type: EDIT_POKEMON,
        payload: {
            item: data,
            index:index
        }
        }
}