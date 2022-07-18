import React from 'react';
import styled from 'styled-components';
import HeadTitle from '../../commonElement/HeadTitle';
import { tableData } from '../../commonElement/testdata/testDataSet';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
  } from '@mui/material';


const MuiTable = () => {
    return (
      <TableContainer sx={{ maxHeight: '500px' }} component={Paper}>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align='center'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


const DataView = () => {
    return(
        <>
            <HeadTitle>데이터테이블</HeadTitle>
            <MuiTable />
        </>
    )
}

export default DataView 