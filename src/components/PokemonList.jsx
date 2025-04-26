"use client"

import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import Pagination from "./Pagination"
import SearchBar from "./SearchBar"

function PokemonList({ addToTeam }) {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const limit = 20

  useEffect(() => {
    fetchPokemon()
  }, [currentPage])

  useEffect(() => {
    if (searchTerm) {
      const filtered = pokemon.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredPokemon(filtered)
    } else {
      setFilteredPokemon(pokemon)
    }
  }, [searchTerm, pokemon])

  const fetchPokemon = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(currentPage - 1) * limit}`,
      )
      const data = await response.json()

      setTotalPages(Math.ceil(data.count / limit))

  
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          const details = await res.json()
          return {
            id: details.id,
            name: details.name,
            image: details.sprites.other["official-artwork"].front_default || details.sprites.front_default,
            types: details.types.map((type) => type.type.name),
            stats: {
              hp: details.stats.find((stat) => stat.stat.name === "hp").base_stat,
              attack: details.stats.find((stat) => stat.stat.name === "attack").base_stat,
              speed: details.stats.find((stat) => stat.stat.name === "speed").base_stat,
            },
          }
        }),
      )

      setPokemon(pokemonData)
    } catch (error) {
      console.error("Error fetching Pokemon:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <div className="loading">Loading Pokémon...</div>
      ) : (
        <>
          <div className="pokemon-grid">
            {filteredPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} addToTeam={addToTeam} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  )
}

export default PokemonList
