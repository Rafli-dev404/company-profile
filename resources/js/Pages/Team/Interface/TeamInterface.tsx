interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export type {TeamMember, TeamSectionProps}
