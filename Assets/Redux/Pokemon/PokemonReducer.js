import {INSERT_POKEMON, DELETE_POKEMON,EDIT_POKEMON } from './PokemonType';

const initialState={
	list:[]
}

const pokemonReducer = (state = initialState, action) => {
	console.log(action);

	switch (action.type) {
		case INSERT_POKEMON:
			const { data } = action.payload;
			return {
				...state,
				list: [
					...state.list,
					{
						data:data
					}
				]	
			}
		case DELETE_POKEMON:
			const deleteList = state.list.filter((elem)=>state.list.indexOf(elem) != action.index)
			return {
				...state,
				list:deleteList
			}
		case EDIT_POKEMON:
			const { item, index } = action.payload;
			return { 
				...state, 
				list: [
				   ...state.list.slice(0,index),
				 	item,
				  	...state.list.slice(index+1)
				  ]
			}
		default:return state
	}
}

export default pokemonReducer;
