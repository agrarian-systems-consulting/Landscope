import React from 'react';
import { Label } from 'semantic-ui-react';

export const ProjectStatusLabel = ({ status }) => {
  switch (status) {
    case 'ongoing_without_tribunal_level_community':
      return <Label color='red'>Kazu ne'e la'o hela - maibé la registu</Label>;
    case 'ongoing_without_tribunal_at_police':
      return <Label color='red'>Kazu ne'e la'o hela - sidauk registu</Label>;
    case 'ongoing_tribunal_open_case':
      return <Label color='yellow'>Kazu ne'e la'o hela - registu ona</Label>;
    case 'solved':
      return <Label color='green'>Rezolvidu</Label>;
    default:
      return '';
  }
};
