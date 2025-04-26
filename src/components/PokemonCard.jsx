"use client"

import { Link } from "react-router-dom"

function PokemonCard({ pokemon, addToTeam }) {
  const { id, name, image, types } = pokemon

  const handleAddToTeam = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToTeam(pokemon)
  }

  return (
    <Link to={`/pokemon/${id}`} className="pokemon-card">
      <div className="pokemon-card-image">
        <img src={image || "/placeholder.svg"} alt={name} />
      </div>
      <div className="pokemon-card-info">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p>#{id.toString().padStart(3, "0")}</p>
        <div className="pokemon-types">
          {types.map((type) => (
            <span key={type} className={`type ${type}`}>
              {type}
            </span>
          ))}
        </div>
        <button className="add-to-team-btn" onClick={handleAddToTeam}>
          Add to Team
        </button>
      </div>
    </Link>
  )
}

export default PokemonCard
