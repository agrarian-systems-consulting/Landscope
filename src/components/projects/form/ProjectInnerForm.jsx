import React, { Fragment } from 'react';
import { Divider, Form } from 'semantic-ui-react';
import SemanticField from '../../../app/common/form/SemanticField';

export const ProjectInnerForm = (values) => {
  return (
    <Fragment>
      <SemanticField label='Titulu kazu' name='name' component={Form.Input} />
      <SemanticField
        label="Status husi konflitu rai ne'e"
        name='status'
        id='status'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'ongoing_without_tribunal_level_community',
            value: 'ongoing_without_tribunal_level_community',
            text: "Kazu ne'e la'o hela  - maibé la registu",
          },
          {
            key: 'ongoing_without_tribunal_at_police',
            value: 'ongoing_without_tribunal_at_police',
            text: "Kazu ne'e la'o hela - sidauk registu",
          },
          {
            key: 'ongoing_tribunal_open_case',
            value: 'ongoing_tribunal_open_case',
            text: "Kazu ne'e la'o hela - registu ona",
          },
          {
            key: 'solved',
            value: 'solved',
            text: 'Rezolvidu',
          },
        ]}
      />
      <SemanticField
        label='Postu administrativu'
        name='postu'
        id='postu'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
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
        ]}
      />
      <SemanticField
        label='Funsaun Área'
        name='areatype'
        id='areatype'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'areatype_mixt',
            value: 'areatype_mixt',
            text: 'Área mixtura (agrikultura & rezidensiál) ',
          },
          {
            key: 'areatype_residential',
            value: 'areatype_residential',
            text: 'Área rezidensiál',
          },
          {
            key: 'areatype_farming',
            value: 'areatype_farming',
            text: 'Área Agrikultura',
          },
          {
            key: 'areatype_transition',
            value: 'areatype_transition',
            text: 'Área agrikuktura no iha prosesu tranzisaun ba área rezidensiál ',
          },
          {
            key: 'grazing',
            value: 'grazing',
            text: 'Fatin hakiak animal',
          },
          {
            key: 'sacred',
            value: 'sacred',
            text: 'Rai protejidu',
          },
        ]}
      />
      <SemanticField
        label='Tipu rai'
        name='landtype'
        id='landtype'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'lowland_irrigated',
            value: 'lowland_irrigated',
            text: 'Rai tetuk ho irigasaun',
          },
          {
            key: 'lowland_not_irrigated',
            value: 'lowland_not_irrigated',
            text: 'Rai tetuk sein irigasaun',
          },
          {
            key: 'flatland',
            value: 'flatland',
            text: 'Rai tetuk',
          },
          {
            key: 'hills',
            value: 'hills',
            text: 'Rai lolon',
          },
          {
            key: 'mixed_area',
            value: 'mixed_area',
            text: 'Rai mixtura (rai lolon no tetuk)',
          },
        ]}
      />
      <SemanticField
        label='Lokalizasaun ba rai'
        name='landlocation'
        id='landlocation'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'close_urban',
            value: 'close_urban',
            text: 'Besik área urbana',
          },
          {
            key: 'rural_close_main_road',
            value: 'rural_close_main_road',
            text: 'Área rurál no besik estrada',
          },
          {
            key: 'rural_isolated',
            value: 'rural_isolated',
            text: 'Área rurál no dook husi estrada',
          },
        ]}
      />

      <SemanticField
        label='Iha ka lai, evidensia kultural ka seluk ruma neebe eziste iha propriedad rai ne?'
        name='culturalevidence'
        id='culturalevidence'
        fluid
        selection
        multiple={true}
        clearable
        component={Form.Dropdown}
        options={[
          { key: 'sacred_house', value: 'sacred_house', text: 'Uma-lisan' },
          { key: 'gravery', value: 'gravery', text: 'Semeteriu' },
          { key: 'ritual', value: 'ritual', text: 'Fatin halo ritual' },
          {
            key: 'sacred_spring',
            value: 'sacred_spring',
            text: 'Bee matan lulik',
          },
          {
            key: 'nothing',
            value: 'nothing',
            text: 'Laiha buat ruma',
          },
        ]}
      />
      {/* <SemanticField
          label='Keta iha uma-lisan ka semetériu'
          name='sacredplaces'
          component={Form.Checkbox}
        /> */}
      <SemanticField
        label='iha ka lai bee-matan ruma ba produsaun ka seluk?'
        name='watersprings'
        component={Form.Checkbox}
      />

      <SemanticField
        label="Produtu prinsipál/ai-han prinsipál ne'ebé prodús"
        name='commodities'
        id='commodities'
        fluid
        selection
        multiple={true}
        clearable
        component={Form.Dropdown}
        options={[
          { key: 'coffee', value: 'coffee', text: 'Kafé' },
          { key: 'rice', value: 'rice', text: 'Foos/hare' },
          { key: 'corn', value: 'corn', text: 'Batar' },
          { key: 'vegetables', value: 'vegetables', text: 'Modo-tahan' },
          { key: 'other_crop', value: 'other_crop', text: 'Ai-han sira seluk' },
          { key: 'livestock', value: 'livestock', text: 'Animál' },
          { key: 'none', value: 'none', text: 'Laiha buat ruma' },
        ]}
      />
      {/* <SemanticField
        label='Area/rai nee tama ba parte patrilinial/matrilinial?'
        name='clanlinearity'
        id='clanlinearity'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'matrilineal',
            value: 'matrilineal',
            text: 'Matrilinial',
          },
          {
            key: 'patrilineal',
            value: 'patrilineal',
            text: 'Patrilinial',
          },
        ]}
      /> */}
      <SemanticField
        label='Horibainhira mak konflitu rai hahú?'
        name='yearstart'
        placeholder='2018'
        component={Form.Input}
      />
      <SemanticField
        label='Identifika disputantes sira'
        name='actors'
        id='actors'
        fluid
        selection
        multiple={true}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'btw_persons',
            value: 'btw_persons',
            text: 'Entre individu/uma -kain',
          },
          {
            key: 'btw_communities',
            value: 'btw_communities',
            text: 'Entre komunidade',
          },
          {
            key: 'btw_community_and_state',
            value: 'btw_community_and_state',
            text: 'Entre komunidade no estadu',
          },
          {
            key: 'btw_community_and_company',
            value: 'btw_community_and_company',
            text: 'Entre komunidade no kompania privadu',
          },
          {
            key: 'btw_individual_and_state_with_company',
            value: 'btw_individual_and_state_with_company',
            text: 'Entre individu/uma Kain no estadu, no kompania privadu',
          },
          {
            key: 'btw_community_and_former_king',
            value: 'btw_community_and_former_king',
            text: 'Entre komonudade & liurai',
          },
          {
            key: 'btw_community_and_former_landlord',
            value: 'btw_community_and_former_landlord',
            text: 'entre komunidade no ocupante iha tempo Chineza, Portugés, Japanez, indonézia',
          },
          {
            key: 'btw_community_and_veterans',
            value: 'btw_community_and_veterans',
            text: 'Entre komunidade no veteranu sira',
          },
          {
            key: 'btw_community_and_church',
            value: 'btw_community_and_church',
            text: 'Entre komunidade no igreja',
          },
        ]}
      />
      <SemanticField
        label="Parte tersera/pihak ketiga sira ne'ebé envolve iha kazu ne'e "
        name='secondaryactors'
        id='secondaryactors'
        fluid
        selection
        multiple={true}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'municipality',
            value: 'municipality',
            text: 'Autoridade munisipál',
          },
          {
            key: 'suku_authorities',
            value: 'suku_authorities',
            text: 'Autoridade suku',
          },
          {
            key: 'army',
            value: 'army',
            text: 'Forsa defeza',
          },
          {
            key: 'police',
            value: 'police',
            text: 'Polísia',
          },
          {
            key: 'national_politicians',
            value: 'national_politicians',
            text: 'Politik nain/ parlamentu',
          },
          {
            key: 'political_party',
            value: 'political_party',
            text: 'Partidu politiku',
          },
          {
            key: 'church',
            value: 'church',
            text: 'Igreja',
          },
          {
            key: 'local_king',
            value: 'local_king',
            text: 'Liurai',
          },
          {
            key: 'veterans',
            value: 'veterans',
            text: 'Veteranus sira',
          },
          {
            key: 'brokers',
            value: 'brokers',
            text: 'Brokers sira',
          },
          {
            key: 'mafia',
            value: 'mafia',
            text: 'Arte marsiais',
          },
        ]}
      />
      <Divider section />
      <SemanticField
        label='Define statutu propriedade rai ho kategoria hirak iha karaik tuir komunidade/kampozes'
        name='legalstatusfarmerspov'
        id='legalstatusfarmerspov'
        fluid
        selection
        multiple={false}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'customary_land',
            value: 'customary_land',
            text: 'Rai lisan',
          },
          {
            key: 'community_land',
            value: 'community_land',
            text: 'Rai komunidade (inklui rai husi lisan/étniku oioin)',
          },
          {
            key: 'community_protection_zone',
            value: 'community_protection_zone',
            text: 'Zona protesaun komunidade',
          },
          {
            key: 'private_land',
            value: 'private_land',
            text: 'Rai privado',
          },
          {
            key: 'public_domain',
            value: 'public_domain',
            text: 'Rai estadu dominu publiku',
          },
          {
            key: 'private_state_land',
            value: 'private_state_land',
            text: 'Rai estadu dominu privado (ospitál, eskola, plantasaun, empreza estadu, nst)',
          },
        ]}
      />
      <SemanticField
        label='Klasifika tipu direitu tuir komunidade/kampozes'
        name='ownershipprooffarmerspov'
        id='ownershipprooffarmerspov'
        fluid
        selection
        multiple={false}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'recognized_inheritance',
            value: 'recognized_inheritance',
            text: 'Direita informais/eransas',
          },
          {
            key: 'right_of_use_portuguese',
            value: 'right_of_use_portuguese',
            text: 'Direitu ba uza - Tempu Portugés/Aforamentu',
          },
          {
            key: 'right_of_use_indonesian_economical_activity',
            value: 'right_of_use_indonesian_economical_activity',
            text: 'Direitu ba uza - Tempu Indonézia (ba atividade ekonomia) Hak Guna usaha',
          },
          {
            key: 'right_of_use_indonesian_house',
            value: 'right_of_use_indonesian_house',
            text: 'Direitu ba uza - Tempu Indonézia (hodi harii uma) Hak guna Bangunan',
          },
          {
            key: 'land_title_portuguese',
            value: 'land_title_portuguese',
            text: 'Titulu ba rai - Tempu Portugés/Propriedade perfeita',
          },
          {
            key: 'land_title_indonesian',
            value: 'land_title_indonesian',
            text: 'Titulu ba rai - Tempu Indonézia/Hak Milik',
          },
          {
            key: 'land_title_in_process_after_independance',
            value: 'land_title_in_process_after_independance',
            text: 'Titulu ba rai/prosesu, depois independésia (Numeru identifikasaun parcela)',
          },
          {
            key: 'land_title_after_independance',
            value: 'land_title_after_independance',
            text: 'Titulu ba rai - depois independénsia (Sertifikadu rai)',
          },
          {
            key: 'state_land',
            value: 'state_land',
            text: 'Rai estadu (dominu privado + dominu públiku)',
          },
          {
            key: 'none',
            value: 'none',
            text: 'La iha buat ruma',
          },
        ]}
      />
      <SemanticField
        label='Justifica situasaun juridika kona ba rai tuir komunidade/kampozes'
        name='juridicsituationclaiming'
        id='juridicsituationclaiming'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'land_registration_gov_program',
            value: 'land_registration_gov_program',
            text: 'Levantamentu/rejistru kadastral',
          },
          {
            key: 'ltm_ancestors_land',
            value: 'ltm_ancestors_land',
            text: 'Posse duradoura',
          },
          {
            key: 'ltm_deplaced',
            value: 'ltm_deplaced',
            text: 'Uzu kapiaun espesial',
          },
          {
            key: 'nothing',
            value: 'nothing',
            text: 'Laihan',
          },
        ]}
      />

      <Divider section />

      <SemanticField
        label='Define statutu propriedade rai ho kategoria hirak iha karaik tuir  - Tuir parte sira seluk/interesada'
        name='legalstatusotherpov'
        id='legalstatusotherpov'
        fluid
        selection
        multiple={false}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'customary_land',
            value: 'customary_land',
            text: 'Rai lisan',
          },
          {
            key: 'community_land',
            value: 'community_land',
            text: 'Rai komunidade (inklui rai husi lisan/étniku oioin)',
          },
          {
            key: 'community_protection_zone',
            value: 'community_protection_zone',
            text: 'Zona protesaun komunidade',
          },
          {
            key: 'private_land',
            value: 'private_land',
            text: 'Rai privado',
          },
          {
            key: 'public_domain',
            value: 'public_domain',
            text: 'Rai estadu dominu publiku',
          },
          {
            key: 'private_state_land',
            value: 'private_state_land',
            text: 'Rai estadu dominu privado (ospitál, eskola, plantasaun, empreza estadu, nst)',
          },
        ]}
      />

      <SemanticField
        label='Klasifika tipu direitu tuir parte sira seluk/interesada'
        name='ownershipproofotherpov'
        id='ownershipproofotherpov'
        fluid
        selection
        multiple={false}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'recognized_inheritance',
            value: 'recognized_inheritance',
            text: 'Direita informais/eransas',
          },
          {
            key: 'right_of_use_portuguese',
            value: 'right_of_use_portuguese',
            text: 'Direitu ba uza - Tempu Portugés/Aforamentu',
          },
          {
            key: 'right_of_use_indonesian_economical_activity',
            value: 'right_of_use_indonesian_economical_activity',
            text: 'Direitu ba uza - Tempu Indonézia (ba atividade ekonomia) Hak Guna usaha',
          },
          {
            key: 'right_of_use_indonesian_house',
            value: 'right_of_use_indonesian_house',
            text: 'Direitu ba uza - Tempu Indonézia (hodi harii uma) Hak guna Bangunan',
          },
          {
            key: 'land_title_portuguese',
            value: 'land_title_portuguese',
            text: 'Titulu ba rai - Tempu Portugés/Propriedade perfeita',
          },
          {
            key: 'land_title_indonesian',
            value: 'land_title_indonesian',
            text: 'Titulu ba rai - Tempu Indonézia/Hak Milik',
          },
          {
            key: 'land_title_in_process_after_independance',
            value: 'land_title_in_process_after_independance',
            text: 'Titulu ba rai/prosesu, depois independésia (Numeru identifikasaun parcela)',
          },
          {
            key: 'land_title_after_independance',
            value: 'land_title_after_independance',
            text: 'Titulu ba rai - depois independénsia (Sertifikadu rai)',
          },
          {
            key: 'state_land',
            value: 'state_land',
            text: 'Rai estadu (dominu privado + dominu públiku)',
          },
          {
            key: 'none',
            value: 'none',
            text: 'La iha buat ruma',
          },
        ]}
      />

      <SemanticField
        label='Justifica situasaun juridika kona ba rai tuir parte sira seluk/interesada'
        name='juridicsituationotherpov'
        id='juridicsituationotherpov'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'land_registration_gov_program',
            value: 'land_registration_gov_program',
            text: 'Levantamentu/rejistru kadastral',
          },
          {
            key: 'ltm_ancestors_land',
            value: 'ltm_ancestors_land',
            text: 'Posse duradoura',
          },
          {
            key: 'ltm_deplaced',
            value: 'ltm_deplaced',
            text: 'Uzu kapiaun espesial',
          },
          {
            key: 'nothing',
            value: 'nothing',
            text: 'Laihan',
          },
        ]}
      />

      <Divider section />

      <SemanticField
        rows={10}
        label='Istória husi konflitu rai - kontestu (husi tempu Portugés, tempu Indonézia, ka depois ukun an - tempu atuál'
        name='conflicthistory'
        component={Form.TextArea}
      />
      <SemanticField
        label='Rai nia luan (totál hira, totál hektares) husi rai konflitu'
        name='conflictarea'
        component={Form.Input}
      />
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu"
        name='impactedhouseholds'
        component={Form.Input}
      />
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu/ne'ebé hela iha área ne'e (mane)"
        name='impactedmen'
        component={Form.Input}
      />
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu/involve ema sira ne'ebé hela iha área ne'e (feto)"
        name='impactedwomen'
        component={Form.Input}
      />
      {/* <SemanticField
        label="Totál populasaun ne'ebé afeitadu/involve, ema sira ne;ebé hela iha área ne'e (labarik)"
        name='impactedkids'
        component={Form.Input}
      /> */}
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu/involve entre tinan 17 - 35 ne'ebé hela iha área ne'e (joven)"
        name='impactedyouth'
        component={Form.Input}
      />
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu/involve, ne'ebé hela iha área ne'e (ema ho defisiénsia)"
        name='impacteddisabled'
        component={Form.Input}
      />
      <SemanticField
        label="Planu utilizasaun ba rai iha futuru  - parte sira ne'ebé interesada "
        name='futureplans'
        id='futureplans'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'housing',
            value: 'housing',
            text: 'Hodi halo uma/residensiál',
          },
          {
            key: 'road',
            value: 'road',
            text: 'Hodi halo estrada ',
          },
          {
            key: 'hospital',
            value: 'hospital',
            text: 'Eskola, ospitál',
          },
          {
            key: 'church',
            value: 'church',
            text: 'Igreja ',
          },
          {
            key: 'private_school_clinic',
            value: 'private_school_clinic',
            text: 'Eskola privadu, klinika ',
          },
          {
            key: 'long_term_lease_private_company',
            value: 'long_term_lease_private_company',
            text: 'Fó aluga ba kompania privadu (ba durasaun tempu badak/naruk)',
          },
          {
            key: 'business_change_landuse',
            value: 'business_change_landuse',
            text: 'Ba komérsiu - muda utilizasuan ba rai ',
          },
          {
            key: 'business_continue',
            value: 'business_continue',
            text: "Ba komérsiu - mantein nafatin utilizasaun rai ne'ebé eziste ona",
          },
        ]}
      />
      {/* <SemanticField
        label="Governu tuir lei (lei ba rai ne'ebé vigora iha TL) ? "
        name='govrespectslaw'
        component={Form.Checkbox}
      /> */}
      <SemanticField
        label='Iha ona planu kompensasaun ruma?'
        name='plannedcompensation'
        id='plannedcompensation'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'planned_not_paid',
            value: 'planned_not_paid',
            text: 'Sin, iha planu maibé seidauk simu kompensasaun',
          },
          {
            key: 'planned_partially_paid',
            value: 'planned_partially_paid',
            text: "Sin, maibé simu kompensasaun sorin balu de'it",
          },
          {
            key: 'fully_paid',
            value: 'fully_paid',
            text: 'Sin, kompensasaun simu hotu ona',
          },
          {
            key: 'no',
            value: 'no',
            text: 'Lae',
          },
          {
            key: 'to_be_defined',
            value: 'to_be_defined',
            text: 'Seidauk defini ho loloos',
          },
        ]}
      />

      <Divider section />

      <SemanticField
        label='Bainhira mak KSI hahú fó ninia apoiu?'
        name='ksisupportstart'
        placeholder='2024'
        component={Form.Input}
      />
      <SemanticField
        label="Tipu apoiu ne'ebé KSI fó (advokasia, suporta legál, halibur istória ba kazu)"
        name='ksisupporttype'
        id='ksisupporttype'
        fluid
        selection
        multiple={false}
        component={Form.Dropdown}
        options={[
          {
            key: 'case_story',
            value: 'case_story',
            text: 'Kolesaun ba istória kazu',
          },
          {
            key: 'advocacy',
            value: 'advocacy',
            text: 'Advokasia',
          },
          {
            key: 'legal_support',
            value: 'legal_support',
            text: 'Apoiu legál',
          },
          {
            key: 'organize_peasant_movement',
            value: 'organize_peasant_movement',
            text: 'Organiza movimentu kamponezes',
          },
          {
            key: 'community_sensibilization',
            value: 'community_sensibilization',
            text: 'Sensibilisasaun komunidade',
          },
        ]}
      />
      {/* <Header color='teal' as={'h5'}>
        Approche paysagère
      </Header> */}
    </Fragment>
  );
};
