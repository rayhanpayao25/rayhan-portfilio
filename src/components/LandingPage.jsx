"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

const LandingPage = () => {
  const [featuredPokemon, setFeaturedPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   
    const fetchFeaturedPokemon = async () => {
      try {
        setIsLoading(true)
      
        const pokemonIds = [25, 6, 150, 384, 149, 94] 

        const promises = pokemonIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.json()),
        )

        const results = await Promise.all(promises)

        const formattedResults = results.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default,
          types: pokemon.types.map((type) => type.type.name),
        }))

        setFeaturedPokemon(formattedResults)
      } catch (error) {
        console.error("Error fetching featured Pokemon:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedPokemon()
  }, [])

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Ultimate Pokémon Team</h1>
          <p>Browse, battle, and become the ultimate Pokémon trainer</p>
          <div className="hero-buttons">
            <Link to="/team" className="primary-button">
              Build Your Team
            </Link>
            <Link to="/pokemon" className="secondary-button">
              Browse Pokémon
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            className="bounce-animation"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Become a Pokémon Master</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                alt="Blastoise"
              />
            </div>
            <h3>Browse Pokémon</h3>
            <p>Explore the complete Pokédex with detailed information on every Pokémon</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="Charizard"
              />
            </div>
            <h3>Build Your Team</h3>
            <p>Create and customize your perfect team of up to six Pokémon</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                alt="Venusaur"
              />
            </div>
            <h3>Battle Simulation</h3>
            <p>Test your team's strength in simulated battles against other Pokémon</p>
          </div>
        </div>
      </section>

      {/* Featured Pokemon */}
      <section className="featured-pokemon">
        <h2>Featured Pokémon</h2>
        {isLoading ? (
          <div className="loading">Loading featured Pokémon...</div>
        ) : (
          <div className="pokemon-showcase">
            {featuredPokemon.map((pokemon) => (
              <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="pokemon-showcase-card">
                <div className="pokemon-showcase-image">
                  <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} />
                </div>
                <div className="pokemon-showcase-info">
                  <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                  <div className="pokemon-types">
                    {pokemon.types.map((type) => (
                      <span key={type} className={`type ${type}`}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Browse the Pokédex</h3>
            <p>Explore our comprehensive database of Pokémon with detailed stats and information</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Build Your Team</h3>
            <p>Select up to six Pokémon to create your dream team with balanced strengths</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Battle & Improve</h3>
            <p>Test your team in simulated battles and refine your strategy</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">800+</div>
            <div className="stat-label">Pokémon</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Types</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Possible Teams</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of trainers building their dream teams</p>
          <Link to="/pokemon" className="cta-button">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
