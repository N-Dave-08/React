import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

export const Header = ({title, subtitle}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box mb={'10px'}>
        <Typography variant='h4' color={colors.grey[100]} fontWeight={'bold'} >
            {title}
        </Typography>
        <Typography variant='h6' color={colors.blueAccent[200]}>
            {subtitle}
        </Typography>
    </Box>
  )
}
