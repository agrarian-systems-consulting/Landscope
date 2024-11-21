import React from 'react';

const JuridicSituationOtherPov = ({ value }) => {
  switch (value) {
    case 'land_registration_gov_program':
      return (
        <>
          <h5>
            Justifica situasaun juridika kona ba rai tuir parte sira
            seluk/interesada
          </h5>
          <p>Levantamentu/rejistru kadastral</p>
        </>
      );
    case 'ltm_ancestors_land':
      return (
        <>
          <h5>
            Justifica situasaun juridika kona ba rai tuir parte sira
            seluk/interesada
          </h5>
          <p>Posse duradoura</p>
        </>
      );
    case 'ltm_deplaced':
      return (
        <>
          <h5>
            Justifica situasaun juridika kona ba rai tuir parte sira
            seluk/interesada
          </h5>
          <p>Uzu kapiaun espesial</p>
        </>
      );
    case 'nothing':
      return (
        <>
          <h5>
            Justifica situasaun juridika kona ba rai tuir parte sira
            seluk/interesada
          </h5>
          <p>Laihan</p>
        </>
      );

    default:
      break;
  }
};

export default JuridicSituationOtherPov;
