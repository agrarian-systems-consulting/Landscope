import React from 'react';
import { List } from 'semantic-ui-react';

export const Actors = ({ value }) => {
  switch (value) {
    case 'btw_persons':
      return <List.Item key={value}>'Entre individu/uma -kain'</List.Item>;
    case 'btw_communities':
      return <List.Item key={value}>'Entre komunidade'</List.Item>;
    case 'btw_community_and_state':
      return <List.Item key={value}>'Entre komunidade no estadu'</List.Item>;
    case 'btw_individual_and_state_with_company':
      return (
        <List.Item key={value}>
          'Entre individu/uma Kain no estadu, no kompania privadu'
        </List.Item>
      );
    case 'btw_community_and_company':
      return (
        <List.Item key={value}>
          'Entre komunidade no kompania privadu'
        </List.Item>
      );
    case 'btw_community_and_former_king':
      return <List.Item key={value}>'Entre komonudade & liurai'</List.Item>;
    case 'btw_community_and_former_landlord':
      return (
        <List.Item key={value}>
          'Entre komunidade no ocupante iha tempo Chineza, Portugés, Japanez,
          indonézia';
        </List.Item>
      );
    case 'btw_community_and_veterans':
      return (
        <List.Item key={value}>'Entre komunidade no veteranu sira'</List.Item>
      );
    case 'btw_community_and_church':
      return <List.Item key={value}>'Entre komunidade no igreja'</List.Item>;
    default:
      return '';
  }
};
