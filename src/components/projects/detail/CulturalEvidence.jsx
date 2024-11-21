import React from 'react';
import { Label } from 'semantic-ui-react';

const CulturalEvidence = ({ value }) => {
  return (
    <Label.Group>
      {value.split(',').map((evidence) => {
        switch (evidence) {
          case 'sacred_house':
            return <Label key={evidence}>Uma-lisan</Label>;
          case 'graveyard':
            return <Label key={evidence}>Semeteriu</Label>;
          case 'ritual':
            return <Label key={evidence}>Fatin halo ritual</Label>;
          case 'sacred_spring':
            return <Label key={evidence}>Bee matan lulik</Label>;
          case 'nothing':
            return <Label key={evidence}>Laiha buat ruma</Label>;
          default:
            return '';
        }
      })}
    </Label.Group>
  );
};
export default CulturalEvidence;
