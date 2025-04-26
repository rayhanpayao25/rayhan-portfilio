"use client"

import { useState } from "react"

function PokemonSearch({ onSelectPokemon }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()

    if (!searchTerm.trim()) return

    setLoading(true)
    setError(null)

    try {
 
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)

        if (response.ok) {
          const data = await response.json()
          const formattedPokemon = formatPokemonData(data)
          setSearchResults([formattedPokemon])
          setLoading(false)
          return
        }
      } catch (error) {
        
        console.log("Direct search failed, trying list search")
      }

 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      const data = await response.json()

      
      const filteredResults = data.results.filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()))

      if (filteredResults.length === 0) {
        setSearchResults([])
        setError("No Pokémon found matching your search.")
        setLoading(false)
        return
      }

     
      const detailedResults = await Promise.all(
        filteredResults.slice(0, 5).map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          const details = await res.json()
          return formatPokemonData(details)
        }),
      )

      setSearchResults(detailedResults)
    } catch (error) {
      console.error("Error searching Pokémon:", error)
      setError("Failed to search for Pokémon. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const formatPokemonData = (data) => {
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
      types: data.types.map((type) => type.type.name),
      stats: {
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
        speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
      },
    }
  }

  return (
    <div className="pokemon-search">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon name"
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="search-error">{error}</p>}

      <div className="search-results">
        {searchResults.map((pokemon) => (
          <div key={pokemon.id} className="search-result-item" onClick={() => onSelectPokemon(pokemon)}>
            <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} className="result-image" />
            <div className="result-info">
              <h4>{pokemon.name}</h4>
              <div className="pokemon-types">
                {pokemon.types.map((type) => (
                  <span key={type} className={`type ${type}`}>
                    {type}
                  </span>
                ))}
              </div>
              <div className="result-stats">
                <span>HP: {pokemon.stats.hp}</span>
                <span>ATK: {pokemon.stats.attack}</span>
                <span>SPD: {pokemon.stats.speed}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonSearch
