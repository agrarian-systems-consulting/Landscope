import React from 'react';

export const LandType = ({ type }) => {
  switch (type) {
    case 'lowland_irrigated':
      return (
        <>
          <h5>Tipu rai</h5>
          <p>Rai tetuk ho irigasaun</p>
        </>
      );
    case 'lowland_not_irrigated':
      return (
        <>
          <h5>Tipu rai</h5>
          <p>Rai tetuk sein irigasaun</p>
        </>
      );
    case 'flatland':
      return (
        <>
          <h5>Tipu rai</h5>
          <p>Rai tetuk</p>
        </>
      );
    case 'hills':
      return (
        <>
          <h5>Tipu rai</h5>
          <p>Rai lolon</p>
        </>
      );

    default:
      break;
  }
};
