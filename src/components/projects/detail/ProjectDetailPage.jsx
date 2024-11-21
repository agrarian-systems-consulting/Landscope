import React, { useState, useEffect, Fragment } from 'react';
import 'ol/ol.css';
import '../../map/Map.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import {
  zoomSlider,
  scaleLine,
  attribution,
  mousePosition,
} from '../../map/MapControls';
import { OSM } from '../../map/MapLayers';
import { stylePolygonBasic } from '../../map/MapStyles';
import { Vector as OlVectorSource } from 'ol/source';
import { Vector as OlVectorLayer } from 'ol/layer';
import { GML as OlFormatGML, GeoJSON } from 'ol/format';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import {
  Grid,
  Segment,
  Breadcrumb,
  Label,
  Icon,
  Button,
  List,
  Table,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { ProjectCriterias } from './ProjectCriterias';
import CommoditiesList from './CommoditiesList';
import { ProjectStatusLabel } from './ProjectStatusLabel';
import { AreaType } from './AreaType';
import { LandType } from './LandType';
import { LandLocation } from './LandLocation';
import SacredPlace from './SacredPlace';
import WaterSprings from './WaterSprings';
import { ClanLinearity } from './ClanLinearity';
import { Actors } from './Actors';
import { SecondaryActors } from './SecondaryActors';
import { LegalStatusOtherPov } from './LegalStatusOtherPov';
import { LegalStatusFarmersPov } from './LegalStatusFarmersPov';
import { OwnershipProofFarmerPov } from './OwnershipProofFarmerPov';
import Postu from './Postu';
import CulturalEvidence from './CulturalEvidence';
import JuridicSituationClaiming from './JuridicSituationClaiming';
import { OwnershipProofOtherPov } from './OwnershipProofOtherPov';

const ProjectDetailPage = ({ match }) => {
  const idProject = match.params.id;

  // Hooks to local state
  const [project, setProject] = useState('');
  const [id] = useState('map');

  const sourceOneProject = new OlVectorSource({
    loader: function (extent) {
      fetch(
        'https://map.geomatick.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=raidisputa:projects&featureId=' +
          idProject +
          '&outputFormat=application/json&srsname=EPSG:3857',
        {
          headers: {
            Authorization: 'Basic ' + btoa('raidisputags:3VC8cNt7p6xUiuR76'),
          },
        }
      ).then(async (response) => {
        const data = await response.json();
        sourceOneProject.addFeatures(new GeoJSON().readFeatures(data));
      });
    },
    strategy: bboxStrategy,
    projection: 'EPSG:3857',
  });

  const vectorOneProject = new OlVectorLayer({
    title: 'Project',
    source: sourceOneProject,
    style: stylePolygonBasic,
  });

  // Effect hook
  useEffect(() => {
    const olmap = new OlMap({
      target: id,
      // Add default map controls (zoom buttons etc.)
      controls: defaultControls({ attribution: false }).extend([
        //zoomSlider,
        scaleLine,
        attribution,
        mousePosition,
      ]),
      layers: [OSM, vectorOneProject],
      view: new OlView({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2,
        maxZoom: 18,
      }),
    });
    OSM.setVisible(true);
    sourceOneProject.on('change', function (e) {
      olmap.getView().fit(sourceOneProject.getExtent(), {
        padding: [50, 50, 50, 50],
        duration: 1000,
        minResolution: 1000,
      });
    });

    try {
      fetch(
        'https://map.geomatick.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=raidisputa:projects&outputFormat=application/json&featureID=' +
          idProject +
          '',
        {
          headers: {
            Authorization: 'Basic ' + btoa('raidisputags:3VC8cNt7p6xUiuR76'),
          },
        }
      ).then(async (response) => {
        const data = await response.json();
        setProject(data.features[0].properties);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Grid>
      <Grid.Column width={16}>
        <Breadcrumb>
          <Breadcrumb.Section as={Link} to='/cases'>
            Cases
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>
            {_.capitalize(project.name)}
          </Breadcrumb.Section>
        </Breadcrumb>
      </Grid.Column>

      <Grid.Row textAlign='justified'>
        <Grid.Column width={10}>
          <Segment.Group>
            <Segment attached='top'>
              <h5>Case description</h5>
            </Segment>

            <Segment attached='bottom'>
              <h5>Titulu kazu</h5>
              <p>{project.name}</p>
              {project.yearstart ? (
                <>
                  <h5>Bainhira mak konflitu rai hahú?</h5>
                  <p>{project.yearstart}</p>
                </>
              ) : (
                ''
              )}

              <h5>Status husi konflitu rai ne'e</h5>
              <ProjectStatusLabel status={project.status} />

              {project.conflicthistory && (
                <>
                  <h5>Istória husi konflitu rai</h5>
                  <p>{project.conflicthistory}</p>
                </>
              )}
            </Segment>
          </Segment.Group>
          <Segment.Group>
            <Segment attached='top'>
              <h5>Additional information</h5>
            </Segment>
            <Segment attached='bottom'>
              {project.areatype && <AreaType type={project.areatype} />}
              {project.landtype && <LandType type={project.landtype} />}
              <Label.Group>
                {project.commodities && (
                  <>
                    <h5>Produtu prinsipál/ai-han prinsipál ne'ebé prodús</h5>
                    <CommoditiesList commodities={project.commodities} />
                  </>
                )}
              </Label.Group>
              {project.landlocation && (
                <LandLocation landlocation={project.landlocation} />
              )}

              {project.legalstatusfarmerspov && (
                <LegalStatusFarmersPov value={project.legalstatusfarmerspov} />
              )}

              {project.ownershipprooffarmerspov && (
                <OwnershipProofFarmerPov
                  value={project.ownershipprooffarmerspov}
                />
              )}

              {project.juridicsituationclaiming && (
                <JuridicSituationClaiming
                  value={project.juridicsituationclaiming}
                />
              )}

              {project.legalstatusotherpov && (
                <LegalStatusOtherPov value={project.legalstatusotherpov} />
              )}

              {project.ownershipproofotherpov && (
                <OwnershipProofOtherPov
                  value={project.ownershipproofotherpov}
                />
              )}

              {/* <Fragment>
                <h5>Contact</h5>
                {project.contact ? (
                  <Fragment>
                    <List>
                      <List.Item>{project.contact}</List.Item>
                      <List.Item>{project.mail}</List.Item>
                      <List.Item>{project.phone}</List.Item>
                    </List>
                  </Fragment>
                ) : (
                  'Non renseigné'
                )}
              </Fragment> */}

              {/* <Fragment>
                <h5>Liens externes</h5>
                {project.links ? (
                  <Fragment>
                    <List bulleted>
                      {project.links.split(',').map((link) => (
                        <List.Item as={'a'} target='_blank' href={link} basic>
                          {link}
                        </List.Item>
                      ))}
                    </List>
                  </Fragment>
                ) : (
                  'Non renseignés'
                )}
              </Fragment> */}
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment.Group>
            <Segment attached='top'>
              <h5>Location</h5>
            </Segment>
            {/* TODO: VERIFIER QUE CA MARCHE */}
            {project.postu && <Postu postu={project.postu} />}
            <Segment attached='bottom'>
              <div id='map' style={{ width: '100%', height: '300px' }}></div>

              {project.conflictarea > 0 && (
                <>
                  <h5>
                    Rai nia luan (totál hira, totál hektares) husi rai konflitu
                  </h5>
                  <p>
                    <Fragment>
                      {parseInt(project.conflictarea).toLocaleString('fr')} ha
                    </Fragment>
                  </p>
                </>
              )}

              {/* <SacredPlace value={project.sacredplaces} /> */}

              {/* TODO:A Tester */}
              {project.culturalevidence && (
                <CulturalEvidence value={project.culturalevidence} />
              )}
              <WaterSprings value={project.waterspring} />
              {/* <ClanLinearity value={project.clanlinearity} /> */}

              {project.impactedhouseholds > 0 && (
                <>
                  <h5>
                    Totál populasaun ne'ebé afeitadu/involve (uma-kain hira)
                  </h5>
                  <p>
                    <Fragment>
                      {parseInt(project.impactedhouseholds).toLocaleString(
                        'fr'
                      )}
                    </Fragment>
                  </p>
                </>
              )}
              <Table celled selectable>
                {project.impactedmen > 0 && (
                  <Table.Row>
                    <Table.Cell>
                      <h5>Mane</h5>
                    </Table.Cell>
                    <Table.Cell>
                      <p>
                        {parseInt(project.impactedmen).toLocaleString('fr')}
                      </p>
                    </Table.Cell>
                  </Table.Row>
                )}
                {project.impactedwomen > 0 && (
                  <Table.Row>
                    <Table.Cell>
                      <h5>Feto</h5>
                    </Table.Cell>
                    <Table.Cell>
                      <Fragment>
                        <p>
                          {' '}
                          {parseInt(project.impactedwomen).toLocaleString('fr')}
                        </p>
                      </Fragment>
                    </Table.Cell>
                  </Table.Row>
                )}
                {/* {project.impactedkids > 0 && (
                  <Table.Row>
                    <Table.Cell>
                      <h5>Labarik</h5>
                    </Table.Cell>
                    <Table.Cell>
                      <Fragment>
                        <p>
                          {parseInt(project.impactedkids).toLocaleString('fr')}
                        </p>
                      </Fragment>
                    </Table.Cell>
                  </Table.Row>
                )} */}
                {project.impactedyouth > 0 && (
                  <Table.Row>
                    <Table.Cell>
                      <h5>Joven</h5>
                    </Table.Cell>
                    <Table.Cell>
                      <Fragment>
                        <p>
                          {parseInt(project.impactedyouth).toLocaleString('fr')}
                        </p>
                      </Fragment>
                    </Table.Cell>
                  </Table.Row>
                )}
                {project.impacteddisabled > 0 && (
                  <Table.Row>
                    <Table.Cell>
                      <h5>Ema ho defisiénsia</h5>
                    </Table.Cell>
                    <Table.Cell>
                      <p>
                        <Fragment>
                          {parseInt(project.impacteddisabled).toLocaleString(
                            'fr'
                          )}
                        </Fragment>
                      </p>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table>
            </Segment>
          </Segment.Group>
          <Segment.Group>
            <Segment attached='top'>
              <h5>Stakeholders</h5>
            </Segment>
            <Segment attached='bottom'>
              {project.actors && (
                <Fragment>
                  <h5>Identifika disputantes sira</h5>
                  {project.actors &&
                    project.actors.split(',').map((actor) => {
                      return <Actors value={project.actor} />;
                    })}
                </Fragment>
              )}

              {project.secondaryactors && (
                <>
                  <h5>
                    Parte tersera/pihak ketiga sira ne'ebé envolve iha kazu ne'e
                  </h5>
                  <List bulleted>
                    {project.secondaryactors.split(',').map((actor) => (
                      <SecondaryActors value={actor} />
                    ))}
                  </List>
                </>
              )}
            </Segment>
          </Segment.Group>
          {/* <Segment.Group>
            <Segment attached='top'>
              <h5>Financements</h5>{' '}
            </Segment>
            <Segment attached='bottom'>
              {project.funds ? project.funds : 'Non renseignés'}
            </Segment>
          </Segment.Group> */}
        </Grid.Column>
        {/* Uncomment following line to debug */}
        {/* <pre>project = {JSON.stringify(project, null, 2)}</pre> */}
      </Grid.Row>
    </Grid>
  );
};

export default ProjectDetailPage;
