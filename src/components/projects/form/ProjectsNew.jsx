import React, { Component } from 'react';
import 'ol/ol.css';
import '../../map/Map.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import { WFS as OlFormatWFS } from 'ol/format';
import {
  zoomSlider,
  scaleLine,
  attribution,
  mousePosition,
} from '../../map/MapControls';
import {
  vectorDraw,
  formatGML,
  MapboxStreet,
  layerVector,
  OSM,
} from '../../map/MapLayers';
import { interactionDraw } from '../../map/MapInteractions';
import {
  Button,
  Segment,
  Grid,
  Form,
  Breadcrumb,
  CommentGroup,
} from 'semantic-ui-react';
import { Formik, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import { withRouter, Link } from 'react-router-dom';
import { ProjectInnerForm } from './ProjectInnerForm';

// TODO in future versions : Move arrDraw to local state
var arrDraw = [];

class ProjectsNew extends Component {
  // Local state
  state = {
    center: [0, 0],
    zoom: 1,
    action: null,
    id: null,
  };

  // React lifecycles
  componentDidMount() {
    const olmap = this.olmap;
    olmap.setTarget('map');
    olmap.on('moveend', () => {
      let center = olmap.getView().getCenter();
      let zoom = olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  // omponentWillUnmount unsubscribe listeners
  componentWillUnmount() {
    const olmap = this.olmap;

    olmap.un('moveend', () => {
      let center = olmap.getView().getCenter();
      let zoom = olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  // Prepare the instance of the map
  olmap = new OlMap({
    target: null,
    // Set default controls
    controls: defaultControls({ attribution: false }).extend([
      zoomSlider,
      scaleLine,
      attribution,
      mousePosition,
    ]),
    // Set layers
    layers: [OSM],
    // Set view
    view: new OlView({
      projection: 'EPSG:3857',
      center: this.state.center,
      zoom: this.state.zoom,
    }),
  });

  // Handle drawing projects
  doDraw = () => {
    // Reference to the map
    const olmap = this.olmap;
    this.setState({ action: 'add' });

    // Add drawing layer and interactions
    olmap.addLayer(vectorDraw);
    olmap.addInteraction(interactionDraw);
    interactionDraw.on('drawend', (e) => {
      arrDraw.push(e.feature);
    });
  };

  doClear = () => {
    // Clear source and draw array
    arrDraw.length = 0;
    vectorDraw.getSource().clear();
  };
  // Handle registration through WFS
  doRegister = async () => {
    const formatWFS = new OlFormatWFS();

    // Add new features in the database through WFST protocol
    for (var i = 0; i < arrDraw.length; i++) {
      let node = formatWFS.writeTransaction(
        [arrDraw[i]],
        null,
        null,
        formatGML
      );
      this.wfst(node);
    }
  };

  wfst = (node) => {
    const s = new XMLSerializer();
    let str = s.serializeToString(node);
    let idProject = null;

    fetch('https://map.geomatick.com/geoserver/raidisputa/wfs', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa('raidisputags:3VC8cNt7p6xUiuR76'),
        'Content-Type': 'text/xml; charset=utf-8',
      },
      body: str,
    }).then(async (response) => {
      // layerVector.getSource().refresh();
      await response
        .text()
        .then(function (text) {
          console.log(text);
          // Retrieve id to redirect to the right page
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(text, 'text/xml');
          const ogcFeatureId = xmlDoc.getElementsByTagName('ogc:FeatureId');
          let idProject = ogcFeatureId[0].getAttribute('fid');
          return idProject;
        })
        .then((response) => {
          if (response !== null) {
            this.props.history.push(`/cases/${response}`);
            // Cleanup
            arrDraw.length = 0;
          }
        });
    });
  };

  render() {
    const validationSchema = Yup.object().shape({
      name: Yup.string().required(),
      status: Yup.string().required(),
    });

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Breadcrumb>
              <Breadcrumb.Section as={Link} to='/projets'>
                Cases
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>New case</Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment>
              <div
                id='map'
                style={{
                  position: 'relative',
                  top: '-37px',
                  margin: 'none',
                  padding: 'none',
                  width: '100%',
                  height: '700px',
                }}
              >
                <Button.Group
                  style={{
                    position: 'relative',
                    top: '5rem',
                    left: '1rem',
                    zIndex: '1',
                  }}
                >
                  {this.state.action === 'add' ? (
                    <Button
                      floated='right'
                      content='Restart'
                      onClick={this.doClear.bind(this)}
                    />
                  ) : (
                    <Button
                      primary
                      content='Draw'
                      onClick={this.doDraw.bind(this)}
                    />
                  )}
                </Button.Group>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment.Group>
              <Segment attached='top'>
                <h5>Case description</h5>
              </Segment>
              <Segment attached='bottom'>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Formik
                        // Initializing values in Formik is mandatory
                        initialValues={{
                          name: '',
                          status: '',
                          areatype: '',
                          landtype: '',
                          landlocation: '',
                          sacredplaces: false,
                          watersprings: false,
                          commodities: '',
                          clanlinearity: '',
                          yearstart: 0,
                          actors: '',
                          secondaryactors: '',
                          legalstatusfarmerspov: '',
                          ownershipprooffarmersp: '',
                          conflicthistory: '',
                          conflictarea: 0,
                          impactedhouseholds: 0,
                          impactedmen: 0,
                          impactedwomen: 0,
                          impactedkids: 0,
                          impactedyouth: 0,
                          impacteddisabled: 0,
                          futureplans: '',
                          govrespectslaw: false,
                          plannedcompensation: '',
                          ksisupportstart: 0,
                          ksisupporttype: '',
                        }}
                        // Handle form validation
                        validationSchema={validationSchema}
                        // Handle form submit
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          // Add form values to geometry
                          // TODO : Should be cleaned with setState si arrDraw est passé dans le local state
                          if (this.state.action === 'add') {
                            arrDraw[0].set('name', values.name);
                            arrDraw[0].set('status', values.status);
                            arrDraw[0].set('areatype', values.areatype);
                            arrDraw[0].set('landtype', values.landtype);
                            arrDraw[0].set('landlocation', values.landlocation);
                            arrDraw[0].set('sacredplaces', values.sacredplaces);
                            arrDraw[0].set('watersprings', values.watersprings);
                            arrDraw[0].set('commodities', values.commodities);
                            arrDraw[0].set(
                              'clanlinearity',
                              values.clanlinearity
                            );
                            arrDraw[0].set(
                              'clanlinearity',
                              values.clanlinearity
                            );
                            arrDraw[0].set('yearstart', values.yearstart);
                            arrDraw[0].set('actors', values.actors);
                            arrDraw[0].set(
                              'secondaryactors',
                              values.secondaryactors
                            );
                            arrDraw[0].set(
                              'legalstatusfarmerspov',
                              values.legalstatusfarmerspov
                            );
                            arrDraw[0].set(
                              'ownershipprooffarmerspov',
                              values.ownershipprooffarmerspov
                            );
                            arrDraw[0].set(
                              'conflicthistory',
                              values.conflicthistory
                            );
                            arrDraw[0].set('conflictarea', values.conflictarea);
                            arrDraw[0].set(
                              'impactedhouseholds',
                              values.impactedhouseholds
                            );
                            arrDraw[0].set('impactedmen', values.impactedmen);
                            arrDraw[0].set(
                              'impactedwomen',
                              values.impactedwomen
                            );
                            arrDraw[0].set(
                              'impactedwomen',
                              values.impactedwomen
                            );
                            arrDraw[0].set('impactedkids', values.impactedkids);
                            arrDraw[0].set(
                              'impactedyouth',
                              values.impactedyouth
                            );
                            arrDraw[0].set(
                              'impacteddisabled',
                              values.impacteddisabled
                            );
                            arrDraw[0].set('futureplans', values.futureplans);
                            arrDraw[0].set(
                              'govrespectslaw',
                              values.govrespectslaw
                            );
                            arrDraw[0].set(
                              'plannedcompensation',
                              values.plannedcompensation
                            );
                            arrDraw[0].set(
                              'ksisupportstart',
                              values.ksisupportstart
                            );
                            arrDraw[0].set(
                              'ksisupporttype',
                              values.ksisupporttype
                            );
                          }
                          // Register the data and the geometry through WFS
                          this.doRegister();
                        }}
                      >
                        {({
                          // Desctructuring formik props
                          values,
                          errors,
                          dirty,
                          isValid,
                          handleSubmit,
                          isSubmitting,
                        }) => {
                          return (
                            <Form onSubmit={handleSubmit}>
                              <ProjectInnerForm values={values} />

                              <div>
                                <Button
                                  primary
                                  content='Confirm'
                                  type='submit'
                                  disabled={isSubmitting || !isValid || !dirty}
                                  loading={isSubmitting}
                                />
                              </div>

                              {/* Uncomment following lines to debug form */}
                              <pre>
                                values = {JSON.stringify(values, null, 2)}
                              </pre>
                              <pre>
                                errors = {JSON.stringify(errors, null, 2)}
                              </pre>
                            </Form>
                          );
                        }}
                      </Formik>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(ProjectsNew);
