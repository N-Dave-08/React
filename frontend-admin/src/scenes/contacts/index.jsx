import React from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Header } from '../../components/Header'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'

const Team = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
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
      <Header title="Contacts" subtitle="List of Contact for Future Rerences" />
      <DataGrid
        checkboxSelection
        rows={mockDataContacts}
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

export default Team