import { useStored } from "./data/useStorage"
import EntityPanel from "./components/EntityPanel"
import { v4 as uuid } from "uuid"
import {
  PlayerCharacter,
  NPC,
  Faction,
  Goal,
  Location,
} from "./types"

function App() {
  const [pcs, setPcs] = useStored<PlayerCharacter>("pcs", [])
  const [npcs, setNpcs] = useStored<NPC>("npcs", [])
  const [factions, setFactions] = useStored<Faction>("factions", [])
  const [goals, setGoals] = useStored<Goal>("goals", [])
  const [locations, setLocations] = useStored<Location>("locations", [])

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">GM Notes</h1>

      <EntityPanel
        label="Player Characters"
        entities={pcs}
        setEntities={setPcs}
        getLabel={(pc) => pc.name}
        onCreate={() => ({
          id: uuid(),
          name: "New PC",
          backstory: "",
          connections: [],
        })}
      />

      <EntityPanel
        label="NPCs"
        entities={npcs}
        setEntities={setNpcs}
        getLabel={(npc) => npc.name + " (" + npc.role + ")"}
        onCreate={() => ({
          id: uuid(),
          name: "New NPC",
          role: "Villager",
          locationId: "",
          affiliations: [],
        })}
      />

      <EntityPanel
        label="Factions"
        entities={factions}
        setEntities={setFactions}
        getLabel={(f) => f.name}
        onCreate={() => ({
          id: uuid(),
          name: "New Faction",
          description: "",
          members: [],
          goals: [],
        })}
      />

      <EntityPanel
        label="Goals"
        entities={goals}
        setEntities={setGoals}
        getLabel={(g) => `${g.title} (${g.status})`}
        onCreate={() => ({
          id: uuid(),
          title: "New Goal",
          description: "",
          status: "active",
          relatedTo: [],
        })}
      />

      <EntityPanel
        label="Locations"
        entities={locations}
        setEntities={setLocations}
        getLabel={(loc) => loc.name}
        onCreate={() => ({
          id: uuid(),
          name: "New Location",
          description: "",
          linkedEntities: [],
        })}
      />
    </div>
  )
}

export default App
