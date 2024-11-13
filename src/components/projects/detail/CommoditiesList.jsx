import React from 'react';
import { Label } from 'semantic-ui-react';

const CommoditiesList = ({ commodities }) => {
  return (
    <Label.Group>
      {commodities.split(',').map((commodity) => {
        switch (commodity) {
          case 'coffee':
            return <Label>Kafé</Label>;
          case 'rice':
            return <Label>Foos</Label>;
          case 'corn':
            return <Label>Batar</Label>;
          case 'vegetables':
            return <Label>Modo-tahan</Label>;
          case 'other_crop':
            return <Label>Ai-han sira seluk</Label>;
          case 'livestock':
            return <Label>Animál</Label>;
          case 'none':
            return <Label>Laiha buat ruma</Label>;
          default:
            return '';
        }
      })}
    </Label.Group>
  );
};

export default CommoditiesList;
