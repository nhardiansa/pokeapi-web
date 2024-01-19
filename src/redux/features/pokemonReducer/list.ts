import { RootState } from "@/redux/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonList = createAsyncThunk(
  "list/pokemon",
  async (offset: number = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`;
    const response = await axios.get(url);
    return response.data;
  }
);

type PokemonListState = {
  list: any[];
  status: "idle" | "loading" | "success" | "failed";
  error: string;
};

const initialState: PokemonListState = {
  list: [],
  status: "idle",
  error: "",
};

const listPokemonSlice = createSlice({
  name: "listPokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state: PokemonListState) => {
        state.status = "loading";
      })
      .addCase(getPokemonList.fulfilled, (state: PokemonListState, action) => {
        state.status = "success";
        state.list = action.payload.results;
      })
      .addCase(getPokemonList.rejected, (state: PokemonListState, action) => {
        state.status = "failed";
        state.list = [];
        state.error = action.error.message || "Failed to fetch pokemon list";
      });
  },
});

export const pokemonListDataSelector = (state: RootState) =>
  state.listPokemon.list;
export const pokemonListStatusSelector = (state: RootState) =>
  state.listPokemon.status;

export default listPokemonSlice.reducer;
