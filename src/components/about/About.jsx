import React from 'react';
import { Segment, Grid, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={10} textAlign='justified'>
          <Segment.Group>
            <Segment attached='top' textAlign='left'>
              <h3>Online platform for Advocacy on Land Dispute Cases </h3>
            </Segment>
            <Segment attached='bottom'>
              <h5>Mapping land conflicts in Timor Leste</h5>
              <p>
                Land disputes are a major challenge in many regions, especially
                for marginalized communities. Advocacy organizations play a
                critical role in ensuring fair and just resolution of these
                disputes. However, the absence of a centralized platform for
                recording, monitoring, and analyzing land disputes limits the
                ability of advocacy groups to effectively organize and present
                evidence, influence policy, and provide timely support to
                affected communities. In Timor-Leste, land conflict issues
                resulted in the loss of land rights to rural communities during
                Portuguese and Indonesian colonialism, and into the
                post-independence period. These conditions have shaped the
                resistance of the rural population against oppression and
                exploitation, through protests and occupation of lands that they
                were forcibly evicted during that period. To meet these
                challenges, KSI is working together for transformation. In an
                effort particularly on technical aspects, it is essential to
                collect accurate data on these disputes to generate information
                for collective advocacy among rural communities. KSI included
                other sensible allies to these issues in this process. KSI data
                collection System relies on manual methods, which poses
                challenges in terms of archiving, as documents are often lost,
                making compilation and access difficult for rural leaders and
                some committed allies. To address these challenges, KSI, with
                the support of its lead partner CCFD, is striving to develop an
                online platform to facilitate the collection, compilation, and
                systematization of baseline data, as well as to provide timely
                information when needed . An online platform dedicated to
                documenting land dispute cases for advocacy purposes will
                enhance transparency, enable data-driven advocacy, and provide a
                tool for tracking the status of cases. This platform will
                empower civil society organizations, legal advocates, and
                community representatives to access vital information and
                mobilize resources to address these disputes.
              </p>

              <Button color='blue' as={Link} to='/map'>
                Explore the map
              </Button>

              <h5>
                Online ida ba Advokasia kona-ba Baze-dadus Konflitu Rai nian
              </h5>
              <p>
                Disputa kona-ba rai sai hanesan dezafiu boot ida iha rejiaun
                barak, liuliu ba komunidade marjinalizadu sira. Organizasaun
                sira advokasia nian iha papél krítiku ida hodi asegura
                rezolusaun ne'ebé justu no justu ba disputa sira-ne'e. Maibé,
                auzénsia hosi plataforma sentralizada ida ba gravasaun,
                monitorizasaun, no análize disputa rai nian limita abilidade
                hosi grupu advokasia sira atu organiza no aprezenta evidénsia ho
                efetivu, influensia polítika, no fornese apoiu oportunu ba
                komunidade sira ne'ebé afetadu. Iha Timor-Leste, kestaun
                konflitu rai rezulta iha lakon direitu ba rai ba komunidade
                rurál sira durante kolonializmu Portugés no Indonézia, no to’o
                iha períodu pós-independénsia nian. Kondisaun sira-ne'e forma
                ona populasaun rurál nia rezisténsia hasoru opresaun no
                esplorasaun, liuhosi protestu sira no okupasaun ba rai sira
                ne'ebé sira hetan privatizasaun forsada durante período ne’eba.
                Atu hatán ba dezafiu sira-ne'e, KSI serbisu hamutuk ba
                transformasaun. Iha esforsu ida partikularmente kona-ba aspetu
                tékniku sira, esensiál atu halibur dadus ne’ebé loos kona-ba
                disputa sira-ne’e hodi hamosu informasaun ba advokasia koletiva
                iha komunidade rurál sira-nia leet. KSI inklui aliadu sira seluk
                ne'ebé sensivel ba asuntu sira-ne'e iha prosesu ida-ne'e. Iha
                Sistema halibur dadus KSI depende ba métodu manuál sira, ne'ebé
                hamosu dezafiu sira iha termu arkivu nian, tanba dala barak
                dokumentu sira lakon, hodi halo kompilasaun no asesu sai difisil
                ba líder rurál sira no aliadu sira ne'ebé iha kompromisu balun.
                Atu hatán ba dezafiu sira-ne’e, KSI, ho apoiu hosi nia parseiru
                prinsipál CCFD, haka’as-an atu dezenvolve plataforma online ida
                hodi fasilita rekolla, kompilasaun, no sistematizasaun dadus
                baze nian, no mós atu fornese informasaun oportunu bainhira
                presiza. Plataforma online ida ne'ebé dedika ba dokumentasaun
                kazu disputa rai nian ba objetivu advokasia nian sei hasa'e
                transparénsia, permite advokasia bazeia ba dadus, no fornese
                instrumentu ida atu akompaña kazu sira nia estatutu. Plataforma
                ida-ne'e sei fó kbiit ba organizasaun sosiedade sivíl sira,
                defensór legál sira, no reprezentante komunidade sira atu asesu
                ba informasaun ne'ebé importante no mobiliza rekursu sira hodi
                rezolve disputa sira-ne'e.
              </p>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default About;
