import React from 'react'
import Avatar from 'react-avatar';
import {
  Bell,
  Settings,
  CircleHelp
} from 'lucide-react';
import Stack from '@mui/material/Stack';
import { Button } from '../components/Button';

export const Header = () => {
  return (
    <header className='flex justify-between items-center bg-white w-full px-4 py-2'>
      <div className='font-bold text-xl text-orange-400'>NutriFind</div>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center'}}>
        <Button icon={<Bell size={40} />} />
        <Button icon={<Settings size={40} />} />
        <Button icon={<CircleHelp size={40} />} />
        <Button icon={<Avatar name='Foo Bar' size='40' round={true} />} />
      </Stack>
    </header>
  )
}
