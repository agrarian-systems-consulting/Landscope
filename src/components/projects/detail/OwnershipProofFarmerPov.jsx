import React from 'react';

export const OwnershipProofFarmerPov = ({ value }) => {
  switch (value) {
    case 'recognized_inheritance':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Direita informais/eransas</p>
        </>
      );
    case 'right_of_use_portuguese':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Direitu atu uza - Tempu Portugés/Aforamentu</p>
        </>
      );
    case 'right_of_use_indonesian_economical_activity':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>
            Direitu atu uza - Tempu Indonézia (ba atividade ekonomia) Hak Guna
            usaha
          </p>
        </>
      );
    case 'right_of_use_indonesian_house':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>
            Direitu atu uza - Tempu Indonézia (hodi harii uma) Hak guna Bangunan
          </p>
        </>
      );
    case 'land_title_portuguese':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Titulu ba rai - Tempu Portugés/Propriedade perfeita</p>
        </>
      );
    case 'land_title_indonesian':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Titulu ba rai - Tempu Indonézia/Hak Milik</p>
        </>
      );
    case 'land_title_in_process_after_independance':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>
            Titulu ba rai/prosesu, depois independésia (Numeru identifikasaun
            parcela)
          </p>
        </>
      );
    case 'land_title_after_independance':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Titulu ba rai - depois independénsia (Sertifikadu rai)</p>
        </>
      );
    case 'state_land':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>Rai estadu (dominu privado + dominu públiku)</p>
        </>
      );
    case 'none':
      return (
        <>
          <h5>Prova kona-ba direitu nain ba rai - Tuir kamponezes sira</h5>
          <p>La iha buat ruma</p>
        </>
      );

    default:
      break;
  }
};
