import React from 'react';
import { Label } from 'semantic-ui-react';

const CommoditiesList = ({ commodities }) => {
  return (
    <Label.Group>
      {commodities.split(',').map((commodity) => {
        switch (commodity) {
          case 'coffee':
            return <Label key={commodity}>Kafé</Label>;
          case 'rice':
            return <Label key={commodity}>Foos</Label>;
          case 'corn':
            return <Label key={commodity}>Batar</Label>;
          case 'vegetables':
            return <Label key={commodity}>Modo-tahan</Label>;
          case 'other_crop':
            return <Label key={commodity}>Ai-han sira seluk</Label>;
          case 'livestock':
            return <Label key={commodity}>Animál</Label>;
          case 'none':
            return <Label key={commodity}>Laiha buat ruma</Label>;
          default:
            return '';
        }
      })}
    </Label.Group>
  );
};

export default CommoditiesList;
