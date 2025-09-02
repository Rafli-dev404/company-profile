interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
}

export type {TeamMember, TeamCardProps}
