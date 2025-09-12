export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

export interface TeamSectionProps {
  teamMembers: TeamMember[];
}
