import { useState } from 'react';

const byingredient = () => {
  const [ searchParams, setSearchParams ] = useState('')
  const [ drink, setDrink ] = useState('')
  const header = {
    headers: { 'X-Api-Key': 'Ckm/gxRY9hyBCggJ8xbVCw==14MRyY95bA1cusbO'}
  }
  const handleSubmit = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/cocktail?ingredients=${searchParams}`, header)
    const data = await res.json()
    setDrink(data)
  }
  
  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen min-w-full">
        <div className='mt-35 w-screen'>
          <div className="text-center mb-10">
            <h1 className="text-4xl mb-10">Looking for something new?<br/>Enter your ingredients below</h1>
            <h1 className="text-3xl mb-5">Separate ingredients by commas.</h1>
            <h1 className='text-2xl'>Ex. Vodka, Lemon Juice</h1>
          </div>
          <div className="flex flex-col items-center w-3/4 m-auto">
            <input 
              className='w-1/2 h-10 mb-10 text-black rounded-md p-2' 
              onChange={event => setSearchParams(event.target.value)}/>
            <button
              className='border rounded-md p-3 text-xl w-1/5'
              onClick={() => handleSubmit()}
              >Search Drink Options</button>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col w-full'>
          {drink && drink.length ? 
              drink.map(drink => (
                <div key={drink.id} className='flex w-3/4 text-center flex-col items-center justify-center border p-5 m-4 rounded-md'>
                  <h1 className='text-3xl capitalize mb-10'>{drink.name}</h1>
                  <h2 className='text-2xl mb-5'>Ingredients:</h2>
                  <div className='border p-2 rounded-md mb-10 w-1/2'>
                    {drink.ingredients ? 
                      drink.ingredients.map((ing, idx) => (
                        <li className='text-xl capitalize' key={idx}>{ing}</li>
                      ))
                    : null}
                  </div>
                  <h2 className='text-2xl mb-5'>Instructions:</h2>
                  <p className='text-xl normal-case'>{drink.instructions}</p>
                </div>
              ))
          : null}
        </div>
      </main>
    </>
  );
}

export default byingredient;