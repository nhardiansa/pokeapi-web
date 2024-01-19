import { combineReducers } from "@reduxjs/toolkit";
import listPokemonReducer from "./pokemonReducer/list";

const rootReducer = combineReducers({
  listPokemon: listPokemonReducer,
});

export default rootReducer;
