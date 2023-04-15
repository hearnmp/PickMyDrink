import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const byname = () => {
  const [ searchParams, setSearchParams ] = useState('')
  const [ drink, setDrink ] = useState(null)
  const header = {
    headers: { 'X-Api-Key': 'Ckm/gxRY9hyBCggJ8xbVCw==14MRyY95bA1cusbO'}
  }
  const handleSubmit = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/cocktail?name=${searchParams}`, header)
    const data = await res.json()
    setDrink(data)
  }


  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen min-w-full">
        <div className="flex hover:cursor-pointer self-end fixed top-0 right-0 m-3">
          <MenuIcon sx={{ fontSize: 60 }}/>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-10">Need to see the recipe?<br/>We've got you covered!</h1>
          <h1 className="text-3xl mb-5">Enter the drink name below:</h1>
        </div>
        <div className="flex flex-col items-center w-3/4">
          <input
            className='w-1/2 h-10 mb-10 text-black rounded-md p-2'
            onChange={event => setSearchParams(event.target.value)}/>
          <button 
            className='border rounded-md p-3 text-xl w-1/5'
            onClick={() => handleSubmit()}>Search Our Database</button>
        </div>
        <div>
          {drink && drink.length ? 
              drink.map(drink => (
                <div key={drink.id}>
                  <h1 className='text-white'>{drink.name}</h1>
                  <h2 className='text-white'>Ingredients:</h2>
                  {drink.ingredients ? 
                    drink.ingredients.map(ing => (
                      <li className='text-white'>{ing}</li>
                    ))
                  : null}
                  <h2 className='text-white'>Instructions:</h2>
                  <p className='text-white'>{drink.instructions}</p>
                </div>
              ))
          : null}
        </div>
      </main>
    </>
  );
}

export default byname;