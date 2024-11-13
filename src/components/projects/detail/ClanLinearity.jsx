import React from 'react';

export const ClanLinearity = ({ value }) => {
  switch (value) {
    case 'matrilineal':
      return (
        <>
          <h5>Clan linearity</h5>
          <p>Matrilinial</p>
        </>
      );
    case 'patrilineal':
      return (
        <>
          <h5>Clan linearity</h5>
          <p>Patrilinial</p>
        </>
      );
    default:
      return '';
  }
};
