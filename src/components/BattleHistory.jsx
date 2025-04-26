"use client"

import { useState, useEffect } from "react"

function BattleHistory() {
  const [battles, setBattles] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedBattle, setSelectedBattle] = useState(null)

  useEffect(() => {
    fetchBattleHistory()
  }, [])

  const fetchBattleHistory = async () => {
    try {
      const response = await fetch("http://localhost:3001/battles")
      const data = await response.json()

      
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))

      setBattles(sortedData)
    } catch (error) {
      console.error("Error fetching battle history:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const deleteBattle = async (id) => {
    setIsDeleting(true)
    try {
      const response = await fetch(`http://localhost:3001/battles/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error(`Failed to delete battle: ${response.statusText}`)
      }

       
      setBattles(battles.filter((battle) => battle.id !== id))

     
      if (selectedBattle && selectedBattle.id === id) {
        setSelectedBattle(null)
      }
    } catch (error) {
      console.error("Error deleting battle:", error)
      alert("Failed to delete battle. Please try again.")
    } finally {
      setIsDeleting(false)
    }
  }

  const deleteAllBattles = async () => {
    if (!window.confirm("Are you sure you want to delete ALL battle history? This cannot be undone.")) {
      return
    }

    setIsDeleting(true)
    try {
      
      const deletePromises = battles.map((battle) =>
        fetch(`http://localhost:3001/battles/${battle.id}`, {
          method: "DELETE",
        }),
      )

      await Promise.all(deletePromises)

 
      setBattles([])
      setSelectedBattle(null)
    } catch (error) {
      console.error("Error deleting all battles:", error)
      alert("Failed to delete all battles. Please try again.")
    } finally {
      setIsDeleting(false)
    }
  }

  const viewBattleDetails = (battle) => {
    setSelectedBattle(battle)
  }

  const closeBattleDetails = () => {
    setSelectedBattle(null)
  }

  
  const getResultClass = (result) => {
    if (result === "Wins") return "result-win"
    if (result === "Loss") return "result-loss"
    return "result-tie"
  }

  if (loading) {
    return <div className="loading">Loading battle history...</div>
  }

  return (
    <div className="battle-history">
      <div className="battle-history-header">
        <h2>Battle History</h2>
        {battles.length > 0 && (
          <button className="delete-all-btn" onClick={deleteAllBattles} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete All"}
          </button>
        )}
      </div>

      {battles.length === 0 ? (
        <div className="empty-history">
          <p>No battles recorded yet. Go to the Battle Simulator to start battling!</p>
        </div>
      ) : (
        <div className="history-list">
          {battles.map((battle, index) => (
            <div key={index} className="history-item">
              <div className="history-item-header">
                <div className="history-date">{formatDate(battle.date)}</div>
                <div className="history-actions">
                  <button className="view-details-btn" onClick={() => viewBattleDetails(battle)}>
                    View Details
                  </button>
                  <button className="delete-battle-btn" onClick={() => deleteBattle(battle.id)} disabled={isDeleting}>
                    Delete
                  </button>
                </div>
              </div>
              <div className="history-battle">
                <div className="history-pokemon">
                  <img src={battle.pokemon1.image || "/placeholder.svg"} alt={battle.pokemon1.name} />
                  <p>{battle.pokemon1.name}</p>
                </div>

                <div className="history-vs">VS</div>

                <div className="history-pokemon">
                  <img src={battle.pokemon2.image || "/placeholder.svg"} alt={battle.pokemon2.name} />
                  <p>{battle.pokemon2.name}</p>
                </div>
              </div>

              <div className="history-result">
                <div className="winner-badge">
                  <img src={battle.winner.image || "/placeholder.svg"} alt={battle.winner.name} />
                  <p>{battle.winner.name} won!</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Battle Details Modal */}
      {selectedBattle && (
        <div className="battle-details-modal">
          <div className="battle-details-content">
            <div className="battle-details-header">
              <h3>Battle Details</h3>
              <button className="close-modal-btn" onClick={closeBattleDetails}>
                ×
              </button>
            </div>

            <div className="battle-details-date">{formatDate(selectedBattle.date)}</div>

            <div className="battle-details-matchup">
              <div className="battle-details-pokemon">
                <img src={selectedBattle.pokemon1.image || "/placeholder.svg"} alt={selectedBattle.pokemon1.name} />
                <p>{selectedBattle.pokemon1.name}</p>
                <span className="score-badge">{selectedBattle.scores?.pokemon1 || 0} wins</span>
              </div>

              <div className="battle-details-vs">VS</div>

              <div className="battle-details-pokemon">
                <img src={selectedBattle.pokemon2.image || "/placeholder.svg"} alt={selectedBattle.pokemon2.name} />
                <p>{selectedBattle.pokemon2.name}</p>
                <span className="score-badge">{selectedBattle.scores?.pokemon2 || 0} wins</span>
              </div>
            </div>

            <div className="battle-details-winner">
              <div className="winner-crown">👑</div>
              <div className="winner-name">{selectedBattle.winner.name} won the battle!</div>
            </div>

            <div className="battle-rounds-summary">
              <h4>Round Results</h4>

              <div className="round-details-grid">
                {selectedBattle.rounds && (
                  <>
                    <div className="round-detail-item">
                      <div className="round-title">Round 1: HP</div>
                      <div className="round-result">
                        {selectedBattle.rounds.hp === selectedBattle.pokemon1.name ? (
                          <span className="winner-text">{selectedBattle.pokemon1.name} won</span>
                        ) : selectedBattle.rounds.hp === selectedBattle.pokemon2.name ? (
                          <span className="winner-text">{selectedBattle.pokemon2.name} won</span>
                        ) : (
                          <span className="tie-text">Tie</span>
                        )}
                      </div>
                    </div>

                    <div className="round-detail-item">
                      <div className="round-title">Round 2: Attack</div>
                      <div className="round-result">
                        {selectedBattle.rounds.attack === selectedBattle.pokemon1.name ? (
                          <span className="winner-text">{selectedBattle.pokemon1.name} won</span>
                        ) : selectedBattle.rounds.attack === selectedBattle.pokemon2.name ? (
                          <span className="winner-text">{selectedBattle.pokemon2.name} won</span>
                        ) : (
                          <span className="tie-text">Tie</span>
                        )}
                      </div>
                    </div>

                    <div className="round-detail-item">
                      <div className="round-title">Round 3: Speed</div>
                      <div className="round-result">
                        {selectedBattle.rounds.speed === selectedBattle.pokemon1.name ? (
                          <span className="winner-text">{selectedBattle.pokemon1.name} won</span>
                        ) : selectedBattle.rounds.speed === selectedBattle.pokemon2.name ? (
                          <span className="winner-text">{selectedBattle.pokemon2.name} won</span>
                        ) : (
                          <span className="tie-text">Tie</span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BattleHistory
