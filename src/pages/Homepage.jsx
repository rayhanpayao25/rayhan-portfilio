import PokemonList from "../components/pokemon-list"
import TeamDisplay from "../components/team-display"
import SearchBar from "../components/search-bar"
import BattleHistory from "../components/battle-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function HomePage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Pokémon Battle App</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          Browse Pokémon, build your team, and battle!
        </p>
      </div>

      <Tabs defaultValue="pokedex" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="pokedex">Pokédex</TabsTrigger>
          <TabsTrigger value="team">My Team</TabsTrigger>
          <TabsTrigger value="battles">Battle History</TabsTrigger>
        </TabsList>

        <TabsContent value="pokedex" className="space-y-4">
          <SearchBar />
          <PokemonList />
        </TabsContent>

        <TabsContent value="team">
          <TeamDisplay />
        </TabsContent>

        <TabsContent value="battles">
          <BattleHistory />
        </TabsContent>
      </Tabs>
    </main>
  )
}
