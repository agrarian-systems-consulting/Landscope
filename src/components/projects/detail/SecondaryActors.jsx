import React from 'react';
import { List } from 'semantic-ui-react';

export const SecondaryActors = ({ value }) => {
  switch (value) {
    case 'municipality':
      return <List.Item>Autoridade munisipál</List.Item>;
    case 'suku_authorities':
      return <List.Item>Autoridade suku</List.Item>;
    case 'army':
      return <List.Item>Forsa defeza</List.Item>;
    case 'police':
      return <List.Item>Polísia</List.Item>;
    case 'national_politicians':
      return <List.Item>Politik nain/ parlamentu</List.Item>;
    case 'veterans':
      return <List.Item>Veteranus sira</List.Item>;
    case 'brokers':
      return <List.Item>Brokers sira</List.Item>;

    default:
      break;
  }
};
