"use client"

import { Link } from "react-router-dom"

function Team({ team, removeFromTeam }) {
  return (
    <div className="team-container">
      <h2>My Pokémon Team</h2>

      {team.length === 0 ? (
        <div className="empty-team">
          <p>Your team is empty! Browse Pokémon to add them to your team.</p>
          <Link to="/" className="browse-btn">
            Browse Pokémon
          </Link>
        </div>
      ) : (
        <>
          <div className="team-info">
            <p>{team.length}/6 Pokémon in team</p>
          </div>

          <div className="team-grid">
            {team.map((pokemon) => (
              <div key={pokemon.id} className="team-pokemon-card">
                <Link to={`/pokemon/${pokemon.id}`} className="team-pokemon-link">
                  <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} />
                  <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                </Link>
                <div className="pokemon-types">
                  {pokemon.types.map((type) => (
                    <span key={type} className={`type ${type}`}>
                      {type}
                    </span>
                  ))}
                </div>
                <div className="team-pokemon-stats">
                  <div className="stat-mini">
                    <span>HP</span>
                    <span>{pokemon.stats.hp}</span>
                  </div>
                  <div className="stat-mini">
                    <span>ATK</span>
                    <span>{pokemon.stats.attack}</span>
                  </div>
                  <div className="stat-mini">
                    <span>SPD</span>
                    <span>{pokemon.stats.speed}</span>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromTeam(pokemon.id)}>
                  Remove
                </button>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: 6 - team.length }).map((_, index) => (
              <div key={`empty-${index}`} className="team-pokemon-card empty">
                <div className="empty-slot">
                  <p>Empty Slot</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Team
