import React from 'react';
import { Icon, List } from 'semantic-ui-react';

const SacredPlace = ({ value }) => {
  return value ? (
    <List>
      <List.Item>
        <List.Icon name='check circle' color='red' />
        <List.Content>Keta iha uma-lisan ka semetériu</List.Content>
      </List.Item>
    </List>
  ) : (
    <List>
      <List.Item>
        <List.Icon name='circle outline' color='olive' />
        <List.Content>Keta iha uma-lisan ka semetériu</List.Content>
      </List.Item>
    </List>
  );
};
export default SacredPlace;
