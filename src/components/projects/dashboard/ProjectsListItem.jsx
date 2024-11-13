import React from 'react';
import { Icon, Button, Table, CardDescription, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

export const ProjectsListItem = ({ project }) => {
  return (
    <Table.Row>
      <Table.Cell textAlign='center'>{project.id}</Table.Cell>
      <Table.Cell colSpan='2'>
        <CardDescription as={NavLink} to={`/cases/${project.id}`}>
          {project.properties.name}
        </CardDescription>
      </Table.Cell>
      {/* <Table.Cell colSpan='2' textAlign='center'>
        {project.properties.actors &&
          project.properties.actors.replace(/,/g, ', ')}
      </Table.Cell> */}
      <Table.Cell colSpan='2' textAlign='center'>
        {project.properties.status}
      </Table.Cell>
    </Table.Row>
  );
};
