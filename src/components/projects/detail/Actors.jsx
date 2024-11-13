import React from 'react';

export const Actors = ({ value }) => {
  switch (value) {
    case 'btw_persons':
      return 'Entre individuál/uma -kain';
    case 'btw_communities':
      return 'Entre komunidade';
    case 'btw_community_and_state':
      return 'Entre komunidade no estadu';
    case 'btw_community_and_company':
      return 'Entre komunidade no kompania privadu';
    case 'btw_community_and_former_king':
      return 'Entre komonudade & liurai';
    case 'btw_community_and_former_landlord':
      return 'Entre komunidade no rai nia nain husi tempu Portugés nia ukun ka tempu indonézia';
    case 'btw_community_and_veterans':
      return 'Entre komunidade no veteranu sira';
    case 'btw_community_and_church':
      return 'Entre komunidade no igreja';
    default:
      return '';
  }
};
