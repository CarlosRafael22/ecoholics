import { Checkbox, FormControlLabel, List, ListItem, ListSubheader } from '@material-ui/core';
import React, { useState } from 'react';

const ApartmentFilters = (props) => {
  const { label, filters } = props;
  const [selected, setSelected] = useState([]);
  const handleChange = (fil) => () => {
    setSelected([...selected, fil]);
  };

  return (
    <List dense subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        {label}
      </ListSubheader>
    }>
      {filters.map(fil => {
        return (
          <ListItem key={fil}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.includes(fil)}
                  onChange={handleChange(fil)}
                  name="checkedB"
                  color="primary"
                />
              }
              label={fil}
            />
          </ListItem>
        )
      })}

    </List>
  );
};

export default ApartmentFilters;
