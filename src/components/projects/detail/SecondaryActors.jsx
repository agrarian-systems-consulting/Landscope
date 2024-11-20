import React from 'react';
import { List } from 'semantic-ui-react';

export const SecondaryActors = ({ value }) => {
  switch (value) {
    case 'municipality':
      return <List.Item key={value}>Autoridade munisipál</List.Item>;
    case 'suku_authorities':
      return <List.Item key={value}>Autoridade suku</List.Item>;
    case 'army':
      return <List.Item key={value}>Forsa defeza</List.Item>;
    case 'police':
      return <List.Item key={value}>Polísia</List.Item>;
    case 'national_politicians':
      return <List.Item key={value}>Politik nain/ parlamentu</List.Item>;
    case 'political_party':
      return (
        <List.Item key={value}>Partidu politiku' nain/ parlamentu</List.Item>
      );
    case 'church':
      return <List.Item key={value}>Igreja</List.Item>;
    case 'local_king':
      return <List.Item key={value}>Liurai</List.Item>;
    case 'veterans':
      return <List.Item key={value}>Veteranus sira</List.Item>;
    case 'brokers':
      return <List.Item key={value}>Brokers sira</List.Item>;

    default:
      break;
  }
};
