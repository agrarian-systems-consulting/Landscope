import React from 'react';
import { Icon, List } from 'semantic-ui-react';

const WaterSprings = ({ value }) => {
  return value ? (
    <List>
      <List.Item>
        <List.Icon name='check circle' color='red' />
        <List.Content>Keta iha bee-matan?</List.Content>
      </List.Item>
    </List>
  ) : (
    <List>
      <List.Item>
        <List.Icon name='circle outline' color='olive' />
        <List.Content>Keta iha bee-matan?</List.Content>
      </List.Item>
    </List>
  );
};
export default WaterSprings;
