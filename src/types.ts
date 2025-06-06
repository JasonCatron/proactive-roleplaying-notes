export type Goal = {
  id: string
  title: string
  description: string
  status: "active" | "completed" | "failed"
  relatedTo: string[] // IDs of NPCs or Factions
}

export type PlayerCharacter = {
  id: string
  name: string
  backstory: string
  connections: string[] // IDs
}

export type Faction = {
  id: string
  name: string
  description: string
  members: string[] // PC or NPC IDs
  goals: string[] // Goal IDs
}

export type NPC = {
  id: string
  name: string
  role: string
  locationId: string
  affiliations: string[] // faction or pc ids
}

export type Location = {
  id: string
  name: string
  description: string
  linkedEntities: string[] // NPC/Faction/Goal IDs
}
