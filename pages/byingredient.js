import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const byingredient = () => {
    const [ searchParams, setSearchParams ] = useState('')
  const header = {
    headers: { 'X-Api-Key': 'Ckm/gxRY9hyBCggJ8xbVCw==14MRyY95bA1cusbO'}
  }
  const handleSubmit = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/cocktail?ingredients=${searchParams}`, header)
    const data = await res.json()
    console.log(data)
  }
  
  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen min-w-full">
        <div className="flex hover:cursor-pointer self-end fixed top-0 right-0 m-3">
          <MenuIcon sx={{ fontSize: 60 }}/>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-10">Want to try something new?<br/>Enter your ingredients below</h1>
          <h1 className="text-3xl mb-5">Separate ingredients by commas.</h1>
          <h1 className='text-2xl'>Ex. Vodka, Lemon Juice</h1>
        </div>
        <div className="flex flex-col items-center w-3/4">
          <input 
            className='w-1/2 h-10 mb-10 text-black rounded-md p-2' 
            onChange={event => setSearchParams(event.target.value)}/>
          <button
            className='border rounded-md p-3 text-xl w-1/5'
            onClick={() => handleSubmit()}
            >Search Drink Options</button>
        </div>
      </main>
    </>
  );
}

export default byingredient;