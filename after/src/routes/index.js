import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Table from '../pages/timeSheet';
import TimeSheetDetail from '../pages/timeSheetDetail';
import App from '../App';

export default () => (
  <Grid container justify="center">
    <Switch>
      <Route path="/table/:id" component={TimeSheetDetail} />
      <Route path="/table" component={Table} />
      <Route path="/" component={App} />
    </Switch>
  </Grid>
);
