"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function PokemonDetail({ addToTeam }) {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        const formattedPokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
          types: data.types.map((type) => type.type.name),
          height: data.height / 10, 
          weight: data.weight / 10, 
          abilities: data.abilities.map((ability) => ({
            name: ability.ability.name,
            isHidden: ability.is_hidden,
          })),
          stats: {
            hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
            attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
            speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
          },
        }

        setPokemon(formattedPokemon)
      } catch (error) {
        console.error("Error fetching Pokemon details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonDetail()
  }, [id])

  if (loading) {
    return <div className="loading">Loading Pokémon details...</div>
  }

  if (!pokemon) {
    return <div>Pokémon not found</div>
  }

  return (
    <div className="pokemon-detail">
      <Link to="/" className="back-button">
        ← Back to List
      </Link>

      <div className="pokemon-detail-card">
        <div className="pokemon-detail-header">
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <p className="pokemon-id">#{pokemon.id.toString().padStart(3, "0")}</p>
        </div>

        <div className="pokemon-detail-content">
          <div className="pokemon-detail-image">
            <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} />
            <div className="pokemon-types">
              {pokemon.types.map((type) => (
                <span key={type} className={`type ${type}`}>
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="pokemon-detail-info">
            <div className="info-section">
              <h3>Base Stats</h3>
              <div className="stats-grid">
                <div className="stat">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar-container">
                    <div className="stat-bar" style={{ width: `${(pokemon.stats.hp / 255) * 100}%` }}></div>
                  </div>
                  <span className="stat-value">{pokemon.stats.hp}</span>
                </div>
                <div className="stat">
                  <span className="stat-name">Attack</span>
                  <div className="stat-bar-container">
                    <div className="stat-bar" style={{ width: `${(pokemon.stats.attack / 255) * 100}%` }}></div>
                  </div>
                  <span className="stat-value">{pokemon.stats.attack}</span>
                </div>
                <div className="stat">
                  <span className="stat-name">Speed</span>
                  <div className="stat-bar-container">
                    <div className="stat-bar" style={{ width: `${(pokemon.stats.speed / 255) * 100}%` }}></div>
                  </div>
                  <span className="stat-value">{pokemon.stats.speed}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Details</h3>
              <div className="details-grid">
                <div>
                  <p>
                    <strong>Height:</strong> {pokemon.height} m
                  </p>
                  <p>
                    <strong>Weight:</strong> {pokemon.weight} kg
                  </p>
                </div>
                <div>
                  <h4>Abilities:</h4>
                  <ul className="abilities-list">
                    {pokemon.abilities.map((ability, index) => (
                      <li key={index}>
                        {ability.name.replace("-", " ")}
                        {ability.isHidden && <span className="hidden-ability"> (Hidden)</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button className="add-to-team-btn detail-btn" onClick={() => addToTeam(pokemon)}>
              Add to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
