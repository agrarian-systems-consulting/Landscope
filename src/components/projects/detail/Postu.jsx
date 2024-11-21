import React from 'react';

const postuArray = [
  { key: 'aileu', value: 'aileu', text: 'Aileu' },
  { key: 'laulara', value: 'laulara', text: 'Laulara' },
  { key: 'liquidoe', value: 'liquidoe', text: 'Liquidoe' },
  { key: 'remexio', value: 'remexio', text: 'Remexio' },
  { key: 'ainaro', value: 'ainaro', text: 'Ainaro' },
  { key: 'hatu builico', value: 'hatu builico', text: 'Hatu Builico' },
  { key: 'hatu udo', value: 'hatu udo', text: 'Hatu Udo' },
  { key: 'maubisse', value: 'maubisse', text: 'Maubisse' },
  { key: 'baguia', value: 'baguia', text: 'Baguia' },
  { key: 'baucau', value: 'baucau', text: 'Baucau' },
  { key: 'laga', value: 'laga', text: 'Laga' },
  { key: 'quelicai', value: 'quelicai', text: 'Quelicai' },
  { key: 'vemasse', value: 'vemasse', text: 'Vemasse' },
  { key: 'venilale', value: 'venilale', text: 'Venilale' },
  { key: 'atabae', value: 'atabae', text: 'Atabae' },
  { key: 'balibo', value: 'balibo', text: 'Balibo' },
  { key: 'bobonaro', value: 'bobonaro', text: 'Bobonaro' },
  { key: 'cailaco', value: 'cailaco', text: 'Cailaco' },
  { key: 'lolotoe', value: 'lolotoe', text: 'Lolotoe' },
  { key: 'maliana', value: 'maliana', text: 'Maliana' },
  { key: 'fatululik', value: 'fatululik', text: 'Fatululik' },
  { key: 'fatumean', value: 'fatumean', text: 'Fatumean' },
  { key: 'fohoren', value: 'fohoren', text: 'Fohoren' },
  { key: 'mape_zumalai', value: 'mape_zumalai', text: 'Mape-Zumalai' },
  { key: 'maucatar', value: 'maucatar', text: 'Maucatar' },
  { key: 'suai', value: 'suai', text: 'Suai' },
  { key: 'tilomar', value: 'tilomar', text: 'Tilomar' },
  { key: 'atauro', value: 'atauro', text: 'Ataúro' },
  { key: 'cristo rei', value: 'cristo rei', text: 'Cristo Rei' },
  { key: 'dom_aleixo', value: 'dom_aleixo', text: 'Dom Aleixo' },
  { key: 'metinaro', value: 'metinaro', text: 'Metinaro' },
  { key: 'nain feto', value: 'nain feto', text: 'Nain Feto' },
  { key: 'vera cruz', value: 'vera cruz', text: 'Vera Cruz' },
  { key: 'atsabe', value: 'atsabe', text: 'Atsabe' },
  { key: 'ermera', value: 'ermera', text: 'Ermera' },
  { key: 'hatulia', value: 'hatulia', text: 'Hatulia' },
  {
    key: 'letefoho_ermera',
    value: 'letefoho_ermera',
    text: 'Letefoho (Ermera)',
  },
  { key: 'railaco', value: 'railaco', text: 'Railaco' },
  { key: 'iliomar', value: 'iliomar', text: 'Iliomar' },
  { key: 'lautém', value: 'lautém', text: 'Lautém' },
  { key: 'los palos', value: 'los palos', text: 'Los palos' },
  { key: 'luro', value: 'luro', text: 'Luro' },
  { key: 'tutuala', value: 'tutuala', text: 'Tutuala' },
  { key: 'bazartete', value: 'bazartete', text: 'Bazartete' },
  { key: 'liquiçá', value: 'liquiçá', text: 'Liquiçá' },
  { key: 'maubara', value: 'maubara', text: 'Maubara' },
  { key: 'loes', value: 'loes', text: 'Loes' },
  {
    key: 'barique_natarbora',
    value: 'barique_natarbora',
    text: 'Barique/Natarbora',
  },
  { key: 'laclo', value: 'laclo', text: 'Laclo' },
  { key: 'laclubar', value: 'laclubar', text: 'Laclubar' },
  { key: 'laleia', value: 'laleia', text: 'Laleia' },
  { key: 'manatuto', value: 'manatuto', text: 'Manatuto' },
  { key: 'soibada', value: 'soibada', text: 'Soibada' },
  { key: 'alas', value: 'alas', text: 'Alas' },
  { key: 'fatuberliu', value: 'fatuberliu', text: 'Fatuberliu' },
  { key: 'same', value: 'same', text: 'Same' },
  { key: 'turiscai', value: 'turiscai', text: 'Turiscai' },
  { key: 'nitibe', value: 'nitibe', text: 'Nitibe' },
  { key: 'oesilo', value: 'oesilo', text: 'Oesilo' },
  {
    key: 'pante macassar',
    value: 'pante macassar',
    text: 'Pante Macassar',
  },
  { key: 'passabe', value: 'passabe', text: 'Passabe' },
  { key: 'lacluta', value: 'lacluta', text: 'Lacluta' },
  { key: 'ossu', value: 'ossu', text: 'Ossu' },
  { key: 'viqueque', value: 'viqueque', text: 'Viqueque' },
  { key: 'watu_carbau', value: 'watu_carbau', text: 'Watu-Carbau' },
  { key: 'watu_lari', value: 'watu_lari', text: 'Watu-Lari' },
];

const Postu = ({ postu }) => {
  return postuArray.map((i) => {
    console.log(i.value);
    if (i.value === postu) {
      return (
        <>
          <h5>Postu administrativu</h5> <p key={i.key}>{i.text}</p>
        </>
      );
    }
  });
};

export default Postu;
