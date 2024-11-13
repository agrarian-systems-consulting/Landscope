import React, { Fragment } from 'react';
import { Form, Header } from 'semantic-ui-react';
import SemanticField from '../../../app/common/form/SemanticField';

export const ProjectInnerForm = (values) => {
  return (
    <Fragment>
      <SemanticField label='Case name' name='name' component={Form.Input} />
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
            key: 'ongoing_without_tribunal',
            value: 'ongoing_without_tribunal',
            text: "Kazu ne'e la'o hela  - maibé la tama tribunal",
          },
          {
            key: 'ongoing_tribunal_open_case',
            value: 'ongoing_tribunal_open_case',
            text: "Kazu ne'e la'o hela/kazu nakloke, iha tribunal",
          },
          {
            key: 'solved',
            value: 'solved',
            text: 'Rezolvidu',
          },
        ]}
      />
      <SemanticField
        label='Área agrikultura ka rezidensiál?'
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
      <Form.Group>
        <SemanticField
          label='Keta iha uma-lisan ka semetériu'
          name='sacredplaces'
          component={Form.Checkbox}
        />
        <SemanticField
          label='Keta iha bee-matan?'
          name='watersprings'
          component={Form.Checkbox}
        />
      </Form.Group>

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
          { key: 'rice', value: 'rice', text: 'Foos' },
          { key: 'corn', value: 'corn', text: 'Batar' },
          { key: 'vegetables', value: 'vegetables', text: 'Modo-tahan' },
          { key: 'other_crop', value: 'other_crop', text: 'Ai-han sira seluk' },
          { key: 'livestock', value: 'livestock', text: 'Animál' },
          { key: 'none', value: 'none', text: 'Laiha buat ruma' },
        ]}
      />
      <SemanticField
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
      />
      <SemanticField
        label='Bainhira mak konflitu rai hahú?'
        name='yearstart'
        placeholder='2018'
        component={Form.Input}
      />
      <SemanticField
        label="Identifikasuan ba parte sira ne'ebé envolve"
        name='actors'
        id='actors'
        fluid
        selection
        multiple={false}
        clearable
        component={Form.Dropdown}
        options={[
          {
            key: 'btw_persons',
            value: 'btw_persons',
            text: 'Entre individuál/uma -kain',
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
            key: 'btw_community_and_former_king',
            value: 'btw_community_and_former_king',
            text: 'Entre komonudade & liurai',
          },
          {
            key: 'btw_community_and_former_landlord',
            value: 'btw_community_and_former_landlord',
            text: 'Entre komunidade no rai nia nain husi tempu Portugés nia ukun ka tempu indonézia',
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
        label="Parte interesada sira seluk ne'ebé envolve iha kazu ne'e"
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
            key: 'veterans',
            value: 'veterans',
            text: 'Veteranus sira',
          },
          {
            key: 'brokers',
            value: 'brokers',
            text: 'Brokers sira',
          },
        ]}
      />
      <SemanticField
        label='Estatutu legál rai-nian? Tuir kamponezes sira'
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
            text: 'Rai estadu',
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
        label='Prova kona-ba direitu nain ba rai - Tuir kamponezes sira '
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
            text: 'Direitu atu uza - Tempu Portugés/Aforamentu',
          },
          {
            key: 'right_of_use_indonesian_economical_activity',
            value: 'right_of_use_indonesian_economical_activity',
            text: 'Direitu atu uza - Tempu Indonézia (ba atividade ekonomia) Hak Guna usaha',
          },
          {
            key: 'right_of_use_indonesian_house',
            value: 'right_of_use_indonesian_house',
            text: 'Direitu atu uza - Tempu Indonézia (hodi harii uma) Hak guna Bangunan',
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
        label="Totál populasaun ne'ebé afeitadu/involve (uma-kain hira)"
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
      <SemanticField
        label="Totál populasaun ne'ebé afeitadu/involve, ema sira ne;ebé hela iha área ne'e (labarik)"
        name='impactedkids'
        component={Form.Input}
      />
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
        label="Planu utilizasaun ba rai iha futuru  - parte sira ne'ebé reklama (estadu) "
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
      <SemanticField
        label="Governu tuir lei (lei ba rai ne'ebé vigora iha TL) ? "
        name='govrespectslaw'
        component={Form.Checkbox}
      />
      <SemanticField
        label='Keta iha planu ruma ba kompensasaun?'
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
