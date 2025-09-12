import React from 'react';
import LayoutMain from '../Layout/LayoutMain';
import TeamSection from './Components/TeamSection';
import { useTeam } from '@/components/context/teamContentContext';

export default function Index() {
  const { members } = useTeam(); // Live data dari context

  return (
    <LayoutMain title="Our Team">
      <TeamSection teamMembers={members} />
    </LayoutMain>
  );
}
