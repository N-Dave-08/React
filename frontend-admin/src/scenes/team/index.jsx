import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Header } from '../../components/Header'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';

const Team = () => {

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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsRoundedIcon />}
            {access === "manager" && <SecurityRoundedIcon />}
            {access === "user" && <LockOpenRoundedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
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
      <Header title="Team" subtitle="Menaging the team Members" />
      <DataGrid
        checkboxSelection
        rows={mockDataTeam}
        columns={columns}
        
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