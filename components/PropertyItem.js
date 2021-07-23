import { Avatar, Card, CardContent, Chip, Grid, ListItem, makeStyles, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
{/* <a
href="https://nextjs.org/docs"
className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
>
<div className="flex justify-between text-center mb-2">
  <h3 className="text-2xl font-bold">{name}</h3>
  <h6>{`Score ${score}/10`}</h6>
</div>
<img src="https://th.bing.com/th/id/R.df35fd7c3e7b4d60720d6e176df9af3d?rik=vkdA8LddOImMqA&pid=ImgRaw" height="200" width="400" />
<p className="mt-4 text-xl">{filters.areaFilters.bikesStationNearby ? 'Bike station nearby' : 'No bike station nearby'}</p>
</a> */}


const PropertyItem = (props) => {
  const { data } = props;
  return (
    <ListItem>
      <Card style={{ width: '100%' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={data.pictures[0].url} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {data.Name}
                  </Typography>
                </Grid>
                {data.eco_friendly && (
                  <Grid item xs={2}>
                    <Tooltip title="This property follows a guidlines and rules that makes it top notch. Promise">
                      <Chip
                        color="primary"
                        avatar={<Avatar>
                          <EcoRoundedIcon />
                        </Avatar>}
                        label={`${data.eco_friendly_score}/10`}
                        variant="outlined"
                      />
                    </Tooltip>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography>{data.city}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2"><strong>{data.reference_price} € / Night</strong></Typography>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default PropertyItem;
