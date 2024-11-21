import React from 'react';
import { Label } from 'semantic-ui-react';

const CulturalEvidence = ({ value }) => {
  return (
    <Label.Group>
      {value.split(',').map((evidence) => {
        switch (evidence) {
          case 'sacred_house':
            return <Label>Uma-lisan</Label>;
          case 'graveyard':
            return <Label>Semeteriu</Label>;
          case 'ritual':
            return <Label>Fatin halo ritual</Label>;
          case 'sacred_spring':
            return <Label>Bee matan lulik</Label>;
          case 'nothing':
            return <Label>Laiha buat ruma</Label>;
          default:
            return '';
        }
      })}
    </Label.Group>
  );
};
export default CulturalEvidence;
