import React from 'react';

export const AreaType = ({ type }) => {
  switch (type) {
    case 'areatype_mixt':
      return (
        <>
          <h5>Área agrikultura ka rezidensiál?</h5>
          <p>Área mixtura (agrikultura & rezidensiál)</p>
        </>
      );
    case 'areatype_residential':
      return (
        <>
          <h5>Área agrikultura ka rezidensiál?</h5>
          <p>Área rezidensiál</p>
        </>
      );
    case 'areatype_farming':
      return (
        <>
          <h5>Área agrikultura ka rezidensiál?</h5>
          <p>Área Agrikultura</p>
        </>
      );
    case 'areatype_transition':
      return (
        <>
          <h5>Área agrikultura ka rezidensiál?</h5>
          <p>Área agrikuktura no iha prosesu tranzisaun ba área rezidensiál</p>
        </>
      );

    default:
      break;
  }
};
