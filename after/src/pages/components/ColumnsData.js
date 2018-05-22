import React from 'react';
import CustomTableCell from './customTableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';

const ColumnsData = ({ columns, children }) => (
  <TableBody>
    {columns.map(data => (
      <TableRow key={data.id}>
        {data.data.map(rowData => {
          if (rowData.meta === 'details') {
            return <CustomTableCell key={rowData.meta}>{children(data)}</CustomTableCell>;
          }
          return <CustomTableCell key={rowData.meta}>{rowData.title}</CustomTableCell>;
        })}
      </TableRow>
    ))}
  </TableBody>
);

ColumnsData.propTypes = {
  columns: PropTypes.arrayOf(Array),
  children: PropTypes.func,
};
ColumnsData.defaultProps = {
  columns: [],
  children: () => 'No Actions supplied!',
};
export default ColumnsData;
