"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-700",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
}

export default function PokemonDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pokemonData, setPokemonData] = useState(null)
  const [speciesData, setSpeciesData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true)
      try {
        // Fetch Pokemon details
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!pokemonRes.ok) {
          throw new Error("Pokemon not found")
        }

        const pokemonData = await pokemonRes.json()
        setPokemonData(pokemonData)

        // Fetch species data
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

        if (speciesRes.ok) {
          const speciesData = await speciesRes.json()
          setSpeciesData(speciesData)
        }
      } catch (error) {
        console.error("Error fetching Pokemon details:", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonDetails()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pokédex
          </Button>
        </div>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </div>
    )
  }

  if (error || !pokemonData) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pokédex
          </Button>
        </div>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Pokémon Not Found</h2>
          <p className="text-muted-foreground">The Pokémon you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // Get English flavor text
  const flavorText = speciesData?.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\f/g, " ")

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Pokédex
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center">
            <img
              src={
                pokemonData.sprites.other["official-artwork"].front_default || "/placeholder.svg?height=300&width=300"
              }
              alt={pokemonData.name}
              className="object-contain max-w-full max-h-[300px]"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold capitalize">{pokemonData.name}</h1>
            <div className="flex gap-2">
              {pokemonData.types.map((type) => (
                <Badge key={type.type.name} className={`${typeColors[type.type.name] || "bg-gray-500"} text-white`}>
                  {type.type.name}
                </Badge>
              ))}
            </div>
          </div>

          {flavorText && <p className="text-lg mb-6">{flavorText}</p>}

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Height</h3>
              <p className="text-lg">{pokemonData.height / 10} m</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Weight</h3>
              <p className="text-lg">{pokemonData.weight / 10} kg</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Base Experience</h3>
              <p className="text-lg">{pokemonData.base_experience}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemonData.abilities.map((ability) => (
                  <Badge key={ability.ability.name} variant="outline">
                    {ability.ability.name.replace("-", " ")}
                    {ability.is_hidden && " (Hidden)"}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="stats" className="w-full">
            <TabsList>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="moves">Moves</TabsTrigger>
            </TabsList>
            <TabsContent value="stats" className="space-y-4 pt-4">
              {pokemonData.stats.map((stat) => (
                <div key={stat.stat.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="capitalize">{stat.stat.name.replace("-", " ")}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <Progress value={stat.base_stat} max={255} className="h-2" />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="moves" className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {pokemonData.moves.slice(0, 20).map((move) => (
                  <Badge key={move.move.name} variant="outline" className="justify-center">
                    {move.move.name.replace("-", " ")}
                  </Badge>
                ))}
                {pokemonData.moves.length > 20 && (
                  <div className="text-muted-foreground text-sm">+{pokemonData.moves.length - 20} more moves</div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
