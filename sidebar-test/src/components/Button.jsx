import React from 'react'
import IconButton from '@mui/material/IconButton';

export const Button = ({icon}) => {
  return (
    <IconButton className={`
        cursor-pointer 
        shadow 
        rounded-full 
        text-gray-500 
        transition-all ease-out duration-300
        active:shadow-none
        size-10
        `}>
            {icon}
    </IconButton>
  )
}
