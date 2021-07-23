import React from 'react';
import { List, ListSubheader } from '@material-ui/core';
import PropertyItem from './PropertyItem';

const PropertyList = (props) => {
  return (
    <List dense subheader={
      <ListSubheader component="div">
        {props.data.length} stays found
      </ListSubheader>
    }>
      {props.data.map(d => {
        return (
          <PropertyItem
            key={d.id}
            data={d}
          />
        );
      })}
    </List>
  )
};

export default PropertyList;
