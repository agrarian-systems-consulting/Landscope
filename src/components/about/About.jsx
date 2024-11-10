import React from 'react';
import { Segment, Grid, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Panes from './Panes';

const About = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={10} textAlign='justified'>
          <Panes />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default About;
