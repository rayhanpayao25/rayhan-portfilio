"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import PokemonSearch from "./PokemonSearch"

function BattleSimulator({ team }) {
  const [selectedPokemon1, setSelectedPokemon1] = useState(null)
  const [selectedPokemon2, setSelectedPokemon2] = useState(null)
  const [battleResult, setBattleResult] = useState(null)
  const [battleInProgress, setBattleInProgress] = useState(false)
  const [battleLog, setBattleLog] = useState([])
  const [useTeamForOpponent, setUseTeamForOpponent] = useState(true)
  const [roundWinners, setRoundWinners] = useState([])
  const [currentRound, setCurrentRound] = useState(0)
  const [battleAnimation, setBattleAnimation] = useState(null)
  const [showBattleArena, setShowBattleArena] = useState(false)

  // Refs for scrolling to battle arena
  const battleArenaRef = useRef(null)

  useEffect(() => {
    setSelectedPokemon1(null)
    if (useTeamForOpponent) {
      setSelectedPokemon2(null)
    }
    setBattleResult(null)
    setBattleLog([])
    setRoundWinners([])
    setCurrentRound(0)
    setBattleAnimation(null)
    setShowBattleArena(false)
  }, [team, useTeamForOpponent])

  const selectPokemon = (pokemon, slot) => {
    if (slot === 1) {
      setSelectedPokemon1(pokemon)
    } else {
      setSelectedPokemon2(pokemon)
    }

    setBattleResult(null)
    setBattleLog([])
    setRoundWinners([])
    setCurrentRound(0)
    setBattleAnimation(null)
    setShowBattleArena(false)
  }

  const handleOpponentSelect = (pokemon) => {
    setSelectedPokemon2(pokemon)
    setBattleResult(null)
    setBattleLog([])
    setRoundWinners([])
    setCurrentRound(0)
    setBattleAnimation(null)
    setShowBattleArena(false)
  }

  const toggleOpponentSource = () => {
    setUseTeamForOpponent(!useTeamForOpponent)
    setSelectedPokemon2(null)
  }

  const getDelay = () => {
    return 500
  }

  const startBattle = async () => {
    if (!selectedPokemon1 || !selectedPokemon2) {
      alert("Please select two Pokémon to battle!")
      return
    }

    if (selectedPokemon1.id === selectedPokemon2.id) {
      alert("Please select two different Pokémon!")
      return
    }

    setBattleInProgress(true)
    setBattleLog([])
    setRoundWinners([])
    setCurrentRound(0)
    setShowBattleArena(true)
    setBattleAnimation("battle-start")

    // Scroll to battle arena
    setTimeout(() => {
      if (battleArenaRef.current) {
        battleArenaRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)

    addToBattleLog(`Battle started between ${selectedPokemon1.name} and ${selectedPokemon2.name}!`)
    addToBattleLog(`This is a 3-round battle. Best 2 out of 3 rounds wins!`)

    // Initial battle animation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    await simulateBattle()

    setBattleInProgress(false)
  }

  const addToBattleLog = (message) => {
    setBattleLog((prevLog) => [...prevLog, message])
  }

  const simulateBattle = async () => {
    // Round 1: HP Comparison
    setCurrentRound(1)
    setBattleAnimation("round-announcement")
    addToBattleLog(`----- ROUND 1: HP COMPARISON -----`)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setBattleAnimation("hp-comparison")
    addToBattleLog(
      `HP comparison: ${selectedPokemon1.name} (${selectedPokemon1.stats.hp}) vs ${selectedPokemon2.name} (${selectedPokemon2.stats.hp})`,
    )
    await new Promise((resolve) => setTimeout(resolve, 1500))

    let round1Winner
    let pokemon1Round1Result
    let pokemon2Round1Result

    if (selectedPokemon1.stats.hp > selectedPokemon2.stats.hp) {
      round1Winner = selectedPokemon1
      pokemon1Round1Result = "Wins"
      pokemon2Round1Result = "Loss"
      setBattleAnimation("pokemon1-wins-round")
      addToBattleLog(`${selectedPokemon1.name} wins Round 1 with higher HP!`)
    } else if (selectedPokemon1.stats.hp < selectedPokemon2.stats.hp) {
      round1Winner = selectedPokemon2
      pokemon1Round1Result = "Loss"
      pokemon2Round1Result = "Wins"
      setBattleAnimation("pokemon2-wins-round")
      addToBattleLog(`${selectedPokemon2.name} wins Round 1 with higher HP!`)
    } else {
      round1Winner = "tie"
      pokemon1Round1Result = "Tie"
      pokemon2Round1Result = "Tie"
      setBattleAnimation("round-tie")
      addToBattleLog(`Round 1 is a tie! Both Pokémon have the same HP.`)
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Round 2: Attack Comparison
    setCurrentRound(2)
    setBattleAnimation("round-announcement")
    addToBattleLog(`----- ROUND 2: ATTACK COMPARISON -----`)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setBattleAnimation("attack-comparison")
    addToBattleLog(
      `Attack comparison: ${selectedPokemon1.name} (${selectedPokemon1.stats.attack}) vs ${selectedPokemon2.name} (${selectedPokemon2.stats.attack})`,
    )
    await new Promise((resolve) => setTimeout(resolve, 1500))

    let round2Winner
    let pokemon1Round2Result
    let pokemon2Round2Result

    if (selectedPokemon1.stats.attack > selectedPokemon2.stats.attack) {
      round2Winner = selectedPokemon1
      pokemon1Round2Result = "Wins"
      pokemon2Round2Result = "Loss"
      setBattleAnimation("pokemon1-attack")
      addToBattleLog(`${selectedPokemon1.name} wins Round 2 with higher Attack!`)
    } else if (selectedPokemon1.stats.attack < selectedPokemon2.stats.attack) {
      round2Winner = selectedPokemon2
      pokemon1Round2Result = "Loss"
      pokemon2Round2Result = "Wins"
      setBattleAnimation("pokemon2-attack")
      addToBattleLog(`${selectedPokemon2.name} wins Round 2 with higher Attack!`)
    } else {
      round2Winner = "tie"
      pokemon1Round2Result = "Tie"
      pokemon2Round2Result = "Tie"
      setBattleAnimation("round-tie")
      addToBattleLog(`Round 2 is a tie! Both Pokémon have the same Attack.`)
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Round 3: Speed Comparison
    setCurrentRound(3)
    setBattleAnimation("round-announcement")
    addToBattleLog(`----- ROUND 3: SPEED COMPARISON -----`)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setBattleAnimation("speed-comparison")
    addToBattleLog(
      `Speed comparison: ${selectedPokemon1.name} (${selectedPokemon1.stats.speed}) vs ${selectedPokemon2.name} (${selectedPokemon2.stats.speed})`,
    )
    await new Promise((resolve) => setTimeout(resolve, 1500))

    let round3Winner
    let pokemon1Round3Result
    let pokemon2Round3Result

    if (selectedPokemon1.stats.speed > selectedPokemon2.stats.speed) {
      round3Winner = selectedPokemon1
      pokemon1Round3Result = "Wins"
      pokemon2Round3Result = "Loss"
      setBattleAnimation("pokemon1-speed")
      addToBattleLog(`${selectedPokemon1.name} wins Round 3 with higher Speed!`)
    } else if (selectedPokemon1.stats.speed < selectedPokemon2.stats.speed) {
      round3Winner = selectedPokemon2
      pokemon1Round3Result = "Loss"
      pokemon2Round3Result = "Wins"
      setBattleAnimation("pokemon2-speed")
      addToBattleLog(`${selectedPokemon2.name} wins Round 3 with higher Speed!`)
    } else {
      round3Winner = "tie"
      pokemon1Round3Result = "Tie"
      pokemon2Round3Result = "Tie"
      setBattleAnimation("round-tie")
      addToBattleLog(`Round 3 is a tie! Both Pokémon have the same Speed.`)
    }

    setRoundWinners([
      {
        stat: "hp",
        pokemon1: {
          name: selectedPokemon1.name,
          value: selectedPokemon1.stats.hp,
          result: pokemon1Round1Result,
        },
        pokemon2: {
          name: selectedPokemon2.name,
          value: selectedPokemon2.stats.hp,
          result: pokemon2Round1Result,
        },
        winner: round1Winner,
      },
      {
        stat: "attack",
        pokemon1: {
          name: selectedPokemon1.name,
          value: selectedPokemon1.stats.attack,
          result: pokemon1Round2Result,
        },
        pokemon2: {
          name: selectedPokemon2.name,
          value: selectedPokemon2.stats.attack,
          result: pokemon2Round2Result,
        },
        winner: round2Winner,
      },
      {
        stat: "speed",
        pokemon1: {
          name: selectedPokemon1.name,
          value: selectedPokemon1.stats.speed,
          result: pokemon1Round3Result,
        },
        pokemon2: {
          name: selectedPokemon2.name,
          value: selectedPokemon2.stats.speed,
          result: pokemon2Round3Result,
        },
        winner: round3Winner,
      },
    ])

    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Final Results
    setBattleAnimation("final-results")
    addToBattleLog(`----- FINAL RESULTS -----`)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    let pokemon1Wins = 0
    let pokemon2Wins = 0

    if (round1Winner === selectedPokemon1) pokemon1Wins++
    else if (round1Winner === selectedPokemon2) pokemon2Wins++

    if (round2Winner === selectedPokemon1) pokemon1Wins++
    else if (round2Winner === selectedPokemon2) pokemon2Wins++

    if (round3Winner === selectedPokemon1) pokemon1Wins++
    else if (round3Winner === selectedPokemon2) pokemon2Wins++

    addToBattleLog(`${selectedPokemon1.name} won ${pokemon1Wins} rounds.`)
    addToBattleLog(`${selectedPokemon2.name} won ${pokemon2Wins} rounds.`)

    let overallWinner
    if (pokemon1Wins > pokemon2Wins) {
      overallWinner = selectedPokemon1
      setBattleAnimation("pokemon1-victory")
      addToBattleLog(`${selectedPokemon1.name} is the overall winner with ${pokemon1Wins} out of 3 rounds!`)
    } else if (pokemon2Wins > pokemon1Wins) {
      overallWinner = selectedPokemon2
      setBattleAnimation("pokemon2-victory")
      addToBattleLog(`${selectedPokemon2.name} is the overall winner with ${pokemon2Wins} out of 3 rounds!`)
    } else {
      const pokemon1TotalStats =
        selectedPokemon1.stats.hp + selectedPokemon1.stats.attack + selectedPokemon1.stats.speed
      const pokemon2TotalStats =
        selectedPokemon2.stats.hp + selectedPokemon2.stats.attack + selectedPokemon2.stats.speed

      if (pokemon1TotalStats >= pokemon2TotalStats) {
        overallWinner = selectedPokemon1
        setBattleAnimation("pokemon1-victory")
        addToBattleLog(`It's a tie in rounds! ${selectedPokemon1.name} wins by having higher total stats!`)
      } else {
        overallWinner = selectedPokemon2
        setBattleAnimation("pokemon2-victory")
        addToBattleLog(`It's a tie in rounds! ${selectedPokemon2.name} wins by having higher total stats!`)
      }
    }

    setBattleResult(overallWinner)

    try {
      const response = await fetch("http://localhost:3001/battles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now().toString(),
          pokemon1: {
            id: selectedPokemon1.id,
            name: selectedPokemon1.name,
            image: selectedPokemon1.image,
          },
          pokemon2: {
            id: selectedPokemon2.id,
            name: selectedPokemon2.name,
            image: selectedPokemon2.image,
          },
          winner: {
            id: overallWinner.id,
            name: overallWinner.name,
            image: overallWinner.image,
          },
          date: new Date().toISOString(),
          rounds: {
            hp: round1Winner === "tie" ? "tie" : round1Winner.name,
            attack: round2Winner === "tie" ? "tie" : round2Winner.name,
            speed: round3Winner === "tie" ? "tie" : round3Winner.name,
          },
          scores: {
            pokemon1: pokemon1Wins,
            pokemon2: pokemon2Wins,
          },
        }),
      })

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
      }

      console.log("Battle saved successfully!")
    } catch (error) {
      console.error("Error saving battle result:", error)
      addToBattleLog("Failed to save battle result to server.")
    }
  }

  const getResultClass = (result) => {
    if (result === "Wins") return "result-win"
    if (result === "Loss") return "result-loss"
    return "result-tie"
  }

  return (
    <div className="battle-simulator">
      <h2>Battle Simulator</h2>

      {team.length === 0 ? (
        <div className="empty-team">
          <p>You need at least 1 Pokémon in your team to battle!</p>
          <Link to="/" className="browse-btn">
            Browse Pokémon
          </Link>
        </div>
      ) : (
        <>
          <div className="battle-selection">
            <div className="battle-side">
              <h3>Select Your Pokémon</h3>
              <div className="pokemon-selection">
                {team.map((pokemon) => (
                  <div
                    key={`p1-${pokemon.id}`}
                    className={`selection-card ${selectedPokemon1?.id === pokemon.id ? "selected" : ""}`}
                    onClick={() => selectPokemon(pokemon, 1)}
                  >
                    <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                  </div>
                ))}
              </div>

              {selectedPokemon1 && (
                <div className="selected-pokemon">
                  <h4>Selected: {selectedPokemon1.name}</h4>
                  <div className="pokemon-stats-compact">
                    <div>HP: {selectedPokemon1.stats.hp}</div>
                    <div>ATK: {selectedPokemon1.stats.attack}</div>
                    <div>SPD: {selectedPokemon1.stats.speed}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="battle-vs">VS</div>

            <div className="battle-side">
              <div className="opponent-toggle">
                <button
                  className={`toggle-btn ${useTeamForOpponent ? "active" : ""}`}
                  onClick={() => useTeamForOpponent || toggleOpponentSource()}
                >
                  From Team
                </button>
                <button
                  className={`toggle-btn ${!useTeamForOpponent ? "active" : ""}`}
                  onClick={() => !useTeamForOpponent || toggleOpponentSource()}
                >
                  Any Pokémon
                </button>
              </div>

              {useTeamForOpponent ? (
                <>
                  <h3>Select Opponent from Team</h3>
                  <div className="pokemon-selection">
                    {team.map((pokemon) => (
                      <div
                        key={`p2-${pokemon.id}`}
                        className={`selection-card ${selectedPokemon2?.id === pokemon.id ? "selected" : ""}`}
                        onClick={() => selectPokemon(pokemon, 2)}
                      >
                        <img src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3>Search for Any Opponent</h3>
                  <PokemonSearch onSelectPokemon={handleOpponentSelect} />
                </>
              )}

              {selectedPokemon2 && (
                <div className="selected-pokemon">
                  <h4>Selected: {selectedPokemon2.name}</h4>
                  <div className="pokemon-stats-compact">
                    <div>HP: {selectedPokemon2.stats.hp}</div>
                    <div>ATK: {selectedPokemon2.stats.attack}</div>
                    <div>SPD: {selectedPokemon2.stats.speed}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="battle-controls">
            <button
              className="battle-btn"
              onClick={startBattle}
              disabled={!selectedPokemon1 || !selectedPokemon2 || battleInProgress}
            >
              {battleInProgress ? "Battle in Progress..." : "Start Battle!"}
            </button>
          </div>

          {/* Battle Arena with Animations */}
          {showBattleArena && (
            <div className="battle-arena" ref={battleArenaRef}>
              <div className="battle-arena-background"></div>

              {/* Round Announcement */}
              {battleAnimation === "round-announcement" && (
                <div className="round-announcement">
                  <span>Round {currentRound}</span>
                </div>
              )}

              {/* Pokemon 1 */}
              <div
                className={`battle-pokemon pokemon1 ${battleAnimation?.includes("pokemon1") ? battleAnimation : ""}`}
              >
                <img src={selectedPokemon1?.image || "/placeholder.svg"} alt={selectedPokemon1?.name} />
                <div className="pokemon-name">{selectedPokemon1?.name}</div>

                {/* Stat Bubbles */}
                {battleAnimation === "hp-comparison" && (
                  <div className="stat-bubble hp">{selectedPokemon1?.stats.hp}</div>
                )}
                {battleAnimation === "attack-comparison" && (
                  <div className="stat-bubble attack">{selectedPokemon1?.stats.attack}</div>
                )}
                {battleAnimation === "speed-comparison" && (
                  <div className="stat-bubble speed">{selectedPokemon1?.stats.speed}</div>
                )}
              </div>

              {/* Pokemon 2 */}
              <div
                className={`battle-pokemon pokemon2 ${battleAnimation?.includes("pokemon2") ? battleAnimation : ""}`}
              >
                <img src={selectedPokemon2?.image || "/placeholder.svg"} alt={selectedPokemon2?.name} />
                <div className="pokemon-name pokemon2-name">{selectedPokemon2?.name}</div>

                {/* Stat Bubbles */}
                {battleAnimation === "hp-comparison" && (
                  <div className="stat-bubble hp">{selectedPokemon2?.stats.hp}</div>
                )}
                {battleAnimation === "attack-comparison" && (
                  <div className="stat-bubble attack">{selectedPokemon2?.stats.attack}</div>
                )}
                {battleAnimation === "speed-comparison" && (
                  <div className="stat-bubble speed">{selectedPokemon2?.stats.speed}</div>
                )}
              </div>

              {/* Battle Effects */}
              {battleAnimation === "pokemon1-attack" && <div className="battle-effect attack-effect"></div>}
              {battleAnimation === "pokemon2-attack" && <div className="battle-effect attack-effect"></div>}
              {battleAnimation === "pokemon1-speed" && <div className="battle-effect speed-effect"></div>}
              {battleAnimation === "pokemon2-speed" && <div className="battle-effect speed-effect"></div>}

              {/* Victory Crown */}
              {battleAnimation === "pokemon1-victory" && <div className="victory-crown pokemon1-crown">👑</div>}
              {battleAnimation === "pokemon2-victory" && <div className="victory-crown pokemon2-crown">👑</div>}
            </div>
          )}

          {currentRound > 0 && (
            <div className="round-indicator">
              <div className={`round-circle ${currentRound >= 1 ? "active" : ""}`}>1</div>
              <div className="round-line"></div>
              <div className={`round-circle ${currentRound >= 2 ? "active" : ""}`}>2</div>
              <div className="round-line"></div>
              <div className={`round-circle ${currentRound >= 3 ? "active" : ""}`}>3</div>
            </div>
          )}

          {battleResult && (
            <div className="battle-result">
              <h3>Battle Result</h3>
              <div className="winner-display">
                <img src={battleResult.image || "/placeholder.svg"} alt={battleResult.name} />
                <div className="winner-info">
                  <h4>{battleResult.name} wins!</h4>
                </div>
              </div>

              {roundWinners.length === 3 && (
                <div className="round-summary">
                  <h4>Round Summary:</h4>
                  <div className="round-summary-container">
                    {roundWinners.map((round, index) => (
                      <div key={index} className="round-summary-item">
                        <div className="round-summary-header">
                          Round {index + 1} ({round.stat.toUpperCase()})
                        </div>
                        <div className="round-summary-content">
                          <div className="pokemon-result">
                            <div className="pokemon-name-stat">
                              <span className="pokemon-name">{round.pokemon1.name}</span>
                              <span className="pokemon-stat">{round.pokemon1.value}</span>
                            </div>
                            <span className={`result-badge ${getResultClass(round.pokemon1.result)}`}>
                              {round.pokemon1.result}
                            </span>
                          </div>
                          <div className="pokemon-result">
                            <div className="pokemon-name-stat">
                              <span className="pokemon-name">{round.pokemon2.name}</span>
                              <span className="pokemon-stat">{round.pokemon2.value}</span>
                            </div>
                            <span className={`result-badge ${getResultClass(round.pokemon2.result)}`}>
                              {round.pokemon2.result}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BattleSimulator
