import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { 
  Drawer as MUIDrawer,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [ open, setOpen ] = useState(false)
  return (
    <>
      <div className="flex w-full h-15 bg-orange self-end top-0 right-0 drop-shadow-lg">
        <div className='hover:cursor-pointer hover:translate-x-1 text-navy'><MenuIcon onClick={() => setOpen(true)} sx={{ fontSize: 60 }}/></div>
      </div>
      <MUIDrawer 
        anchor='top'
        variant='temporary'
        open={open}
      >
        <div className='flex flex-col items-center h-full bg-orange p-8'>
          <div className='hover:cursor-pointer hover:-translate-y-1 text-navy text-2xl self-start' onClick={() => setOpen(false)}><CloseIcon sx={{ fontSize: 50 }}/></div>
          <div className='flex flex-col h-1/2 justify-center text-center'>
            <Link className='text-navy text-3xl mb-8 hover:text-4xl ease-in-out duration-500' onClick={() => setOpen(false)} href='/'>Home</Link>
            <Link className='text-navy text-3xl mb-8 hover:text-4xl ease-in-out duration-500' onClick={() => setOpen(false)} href='/byingredient'>Find By Ingredient</Link>
            <Link className='text-navy text-3xl hover:text-4xl ease-in-out duration-500' onClick={() => setOpen(false)} href='/byname'>Find By Drink Name</Link>
          </div>
        </div>
      </MUIDrawer>
    </>
  );
}

export default Nav;