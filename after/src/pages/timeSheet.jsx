import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TableHeading from './components/TableHeadings';
import ColumnsData from './components/ColumnsData';

const columnsHeading = [
  { title: 'Date', meta: 'date' },
  { title: 'Tracked', meta: 'tracked' },
  { title: 'Untracked', meta: 'untracked' },
  { title: 'Details', meta: 'details' },
];

const columns = [
  {
    id: 0,
    data: [
      { title: '18 May 2018', meta: 'date' },
      { title: '18 hours 25 min', meta: 'tracked' },
      { title: '05 hours 35 min', meta: 'untracked' },
      { title: 'Details', meta: 'details' },
    ],
  },
  {
    id: 1,
    data: [
      { title: '19 May 2018', meta: 'date' },
      { title: '17 hours 25 min', meta: 'tracked' },
      { title: '06 hours 35 min', meta: 'untracked' },
      { title: 'Details', meta: 'details' },
    ],
  },
  {
    id: 2,
    data: [
      { title: '20 May 2018', meta: 'date' },
      { title: '18 hours', meta: 'tracked' },
      { title: '06 hours', meta: 'untracked' },
      { title: 'Details', meta: 'details' },
    ],
  },
  {
    id: 3,
    data: [
      { title: '21 May 2018', meta: 'date' },
      { title: '18 hours 20 min', meta: 'tracked' },
      { title: '05 hours 40 min', meta: 'untracked' },
      { title: 'Details', meta: 'details' },
    ],
  },
];

class TimeSheet extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <Grid item xs={10}>
        <Table>
          <TableHead>
            <TableHeading columns={columnsHeading} />
          </TableHead>
          <ColumnsData columns={columns}>
            {e => (
              <Button component={Link} to={`${match.path}/${e.id}`} variant="raised" color="primary">
                Details
              </Button>
            )}
          </ColumnsData>
        </Table>
      </Grid>
    );
  }
}

export default TimeSheet;
