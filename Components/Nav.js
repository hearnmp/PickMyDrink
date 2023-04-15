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
      <div onClick={() => setOpen(true)} className="flex hover:cursor-pointer self-end fixed top-0 right-0 m-3">
        <MenuIcon sx={{ fontSize: 60 }}/>
      </div>
      <MUIDrawer 
        anchor='right'
        variant='temporary'
        open={open}
      >
        <div className='flex flex-col items-center h-full bg-black p-8'>
          <div className='hover:cursor-pointer text-white text-2xl self-end' onClick={() => setOpen(false)}><CloseIcon sx={{ fontSize: 50 }}/></div>
          <div className='flex flex-col h-1/2 justify-center text-center'>
            <Link className='text-white text-3xl mb-8' onClick={() => setOpen(false)} href='/'>Home</Link>
            <Link className='text-white text-3xl mb-8' onClick={() => setOpen(false)} href='/byingredient'>Find By Ingredient</Link>
            <Link className='text-white text-3xl' onClick={() => setOpen(false)} href='/byname'>Find By Drink Name</Link>
          </div>
        </div>
      </MUIDrawer>
    </>
  );
}

export default Nav;