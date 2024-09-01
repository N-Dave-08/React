import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Header } from '../../components/Header'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'

const Invoices = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Box m={'15px auto'}>
          <Typography color={colors.greenAccent[200]}>
          ${params.row.cost}
        </Typography>
        </Box>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box
      m="0 10px 0 20px"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: 1,
          borderColor: colors.grey[600],
        },
      }}
    >
      <Header title="Invoices" subtitle="List of Invoice Balances" />
      <DataGrid
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        sx={{
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.grey[700],
          },
          '.MuiDataGrid-row.Mui-selected': {
            backgroundColor: colors.grey[700],
          },
          '.MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: colors.grey[600],
          },
          '.MuiDataGrid-row:hover': {
            backgroundColor: colors.grey[600],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.grey[200]} !important`,
          },
        }}
      />
    </Box>
  )
}

export default Invoices