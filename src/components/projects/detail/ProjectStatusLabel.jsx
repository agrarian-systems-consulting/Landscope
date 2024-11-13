import React from 'react';
import { Label } from 'semantic-ui-react';

export const ProjectStatusLabel = ({ status }) => {
  switch (status) {
    case 'ongoing_without_tribunal':
      return (
        <Label color='red'>Kazu ne'e la'o hela - maibé la tama tribunal</Label>
      );
    case 'ongoing_tribunal_open_case':
      return (
        <Label color='yellow'>
          Kazu ne'e la'o hela/kazu nakloke, iha tribunal
        </Label>
      );
    case 'solved':
      return <Label color='green'>Rezolvidu</Label>;
    default:
      return '';
  }
};
