import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import Grid from '@material-ui/core/Grid';
import TableHeading from './components/TableHeadings';
import ColumnsData from './components/ColumnsData';
import Button from '@material-ui/core/Button';

const columnsHeading = [
  { title: 'Entity', meta: 'entity' },
  { title: 'Time', meta: 'time' },
  { title: 'Actions', meta: 'details' },
];

const columns = [
  {
    id: 0,
    data: [{ title: 'Sleep', meta: 'sleep' }, { title: '2 hours', meta: 'gym' }, { title: 'Details', meta: 'details' }],
  },
  {
    id: 1,
    data: [
      { title: 'Office', meta: 'office' },
      { title: '2 hours', meta: 'gym' },
      { title: 'Details', meta: 'details' },
    ],
  },
  {
    id: 2,
    data: [
      { title: 'Running', meta: 'running' },
      { title: '2 hours', meta: 'gym' },
      { title: 'Details', meta: 'details' },
    ],
  },
  {
    id: 4,
    data: [{ title: 'Gym', meta: 'gym' }, { title: '2 hours', meta: 'running' }, { title: 'Details', meta: 'details' }],
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
              <div>
                <Button variant="raised" color="primary">
                  Edit
                </Button>
                &nbsp;
                <Button variant="raised" color="primary">
                  Delete
                </Button>
              </div>
            )}
          </ColumnsData>
        </Table>
      </Grid>
    );
  }
}

export default TimeSheet;
