'use client'

import PokeCard from "@/theme/components/Card";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonList, pokemonListDataSelector, pokemonListStatusSelector } from '@/redux/features/pokemonReducer/list'
import SimpleModal from "@/theme/components/SimpleModal";

export default function Home() {

  // const [pokemons, setPokemons] = useState([])

  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonListDataSelector);
  const pokemonStatus = useSelector(pokemonListStatusSelector);


  const [modalDetailOpen, setModalDetailOpen] = useState(false)

  useEffect(() => {
    dispatch(getPokemonList(0))
  }, [])


  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ m: 2 }}>
          <Grid justifyContent={''} container spacing={4}>

            {/* item */}
            {
              pokemons.map((pokemon: any, i) => (
                <Grid key={pokemon.name} item>
                  <PokeCard
                    url={pokemon.url}
                    name={pokemon.name}
                    btnHandler={() => setModalDetailOpen(true)}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
      <SimpleModal
        imgUrl=""
        closeHandler={() => setModalDetailOpen(false)}
        isOpen={modalDetailOpen}
      />
    </>
  );
}
