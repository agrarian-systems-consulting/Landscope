import React from 'react';

export const LegalStatusFarmersPov = ({ value }) => {
  switch (value) {
    case 'customary_land':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>Rai lisan</p>
        </>
      );
    case 'community_land':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>Rai komunidade (inklui rai husi lisan/étniku oioin)</p>
        </>
      );
    case 'community_protection_zone':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>Zona protesaun komunidade</p>
        </>
      );
    case 'private_land':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>Rai estadu</p>
        </>
      );
    case 'public_domain':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>Rai estadu dominu publiku</p>
        </>
      );
    case 'private_state_land':
      return (
        <>
          <h5>Estatutu legál rai-nian? Tuir kamponezes sira</h5>
          <p>
            Rai estadu dominu privado (ospitál, eskola, plantasaun, empreza
            estadu, nst)
          </p>
        </>
      );

    default:
      break;
  }
};
