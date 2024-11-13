import React from 'react';

export const LandLocation = ({ landlocation }) => {
  switch (landlocation) {
    case 'close_urban':
      return (
        <>
          <h5>Lokalizasaun ba rai</h5>
          <p>Besik área urbana</p>
        </>
      );
    case 'rural_close_main_road':
      return (
        <>
          <h5>Lokalizasaun ba rai</h5>
          <p>Área rurál no besik estrada</p>
        </>
      );
    case 'rural_isolated':
      return (
        <>
          <h5>Lokalizasaun ba rai</h5>
          <p>Área rurál no dook husi estrada</p>
        </>
      );

    default:
      break;
  }
};
