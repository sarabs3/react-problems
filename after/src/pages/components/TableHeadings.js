import React from 'react';
import CustomTableCell from './customTableCell';
import TableRow from '@material-ui/core/TableRow';

const TableHeading = ({ columns = [] }) => (
  <TableRow>{columns.map(data => <CustomTableCell key={data.meta}>{data.title}</CustomTableCell>)}</TableRow>
);

export default TableHeading;
