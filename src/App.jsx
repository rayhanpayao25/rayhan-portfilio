"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import PokemonList from "./components/PokemonList"
import PokemonDetail from "./components/PokemonDetail"
import Team from "./components/Team"
import BattleSimulator from "./components/BattleSimulator"
import BattleHistory from "./components/BattleHistory"
import { useState, useEffect } from "react"

import "./App.css"
import "./components/LandingPage.css"

function App() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/team")
      .then((response) => response.json())
      .then((data) => setTeam(data))
      .catch((error) => console.error("Error loading team:", error))
  }, [])

  useEffect(() => {
    console.log("Current team:", team)
  }, [team])

  const addToTeam = async (pokemon) => {
    if (team.length >= 6) {
      const alertElement = document.createElement("div")
      alertElement.className = "custom-alert"

      const alertContent = document.createElement("div")
      alertContent.className = "custom-alert-content"

      const message = document.createElement("p")
      message.textContent = "Your team is already full! (Max 6 Pokémon)"

      const okButton = document.createElement("button")
      okButton.textContent = "OK"
      okButton.className = "custom-alert-button"
      okButton.onclick = () => {
        document.body.removeChild(alertElement)
      }

      alertContent.appendChild(message)
      alertContent.appendChild(okButton)
      alertElement.appendChild(alertContent)

      document.body.appendChild(alertElement)
      return
    }

    if (team.some((p) => p.id === pokemon.id)) {
      const alertElement = document.createElement("div")
      alertElement.className = "custom-alert"

      const alertContent = document.createElement("div")
      alertContent.className = "custom-alert-content"

      const message = document.createElement("p")
      message.textContent = "This Pokémon is already in your team!"

      const okButton = document.createElement("button")
      okButton.textContent = "OK"
      okButton.className = "custom-alert-button"
      okButton.onclick = () => {
        document.body.removeChild(alertElement)
      }

      alertContent.appendChild(message)
      alertContent.appendChild(okButton)
      alertElement.appendChild(alertContent)

      document.body.appendChild(alertElement)
      return
    }

    const newTeam = [...team, pokemon]
    setTeam(newTeam)

    try {
      await fetch("http://localhost:3001/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      })
    } catch (error) {
      console.error("Error saving to team:", error)
    }
  }

  const removeFromTeam = async (pokemonId) => {
    const newTeam = team.filter((pokemon) => pokemon.id !== pokemonId)
    setTeam(newTeam)

    try {
      await fetch(`http://localhost:3001/team/${pokemonId}`, {
        method: "DELETE",
      }).then((response) => {
        if (!response.ok) {
          console.error("Failed to delete from server:", response.statusText)
        }
      })
    } catch (error) {
      console.error("Error removing from team:", error)
    }
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pokemon" element={<PokemonList addToTeam={addToTeam} />} />
            <Route path="/pokemon/:id" element={<PokemonDetail addToTeam={addToTeam} />} />
            <Route path="/team" element={<Team team={team} removeFromTeam={removeFromTeam} />} />
            <Route path="/battle" element={<BattleSimulator team={team} />} />
            <Route path="/history" element={<BattleHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
