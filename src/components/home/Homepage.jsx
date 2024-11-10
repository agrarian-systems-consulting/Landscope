import React, { Component } from 'react';
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            Rai Disputa
          </Header>
          {/* <Image
            size='small'
            src='/assets/ksi-logo.png'
            alt='logo'
            style={{ margin: 'auto', marginBottom: 60 }}
          /> */}
          <Header as='h2' inverted>
            Kdalalak Sulimutuk Institute
            Land disputes cases database fir Timor-Leste
          </Header>
          <br />
          <p>Made the kind support of the TAPSA program</p>
        </Container>
        <Container>
          <Button as={Link} to='/about' size='huge' inverted>
            Explore
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
    );
  }
}
