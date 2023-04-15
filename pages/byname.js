import { useState } from 'react';

const byname = () => {
  const [ searchParams, setSearchParams ] = useState('')
  const [ drink, setDrink ] = useState(null)
  const API_Key = process.env.API_KEY
  const header = {
    headers: { 'X-Api-Key': `${API_Key}`}
  }
  const handleSubmit = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/cocktail?name=${searchParams}`, header)
    const data = await res.json()
    setDrink(data)
  }


  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen min-w-full bg-blue">
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-10 text-gray">Need to see the recipe?<br/>We've got you covered!</h1>
          <h1 className="text-3xl mb-5 text-gray">Enter the drink name below:</h1>
        </div>
        <div className="flex flex-col items-center w-3/4">
          <input
            className='w-1/2 h-10 mb-10 bg-gray text-navy rounded-md p-2'
            onChange={event => setSearchParams(event.target.value)}/>
          <button 
            className='text-yellow drop-shadow-2xl font-bold ease-in-out duration-500 hover:-translate-y-2 rounded-md p-5 text-xl bg-orange border-yellow border-4 w-1/5'
            onClick={() => handleSubmit()}>Search Our Database</button>
        </div>
        <div className='flex justify-center items-center flex-col w-full'>
          {drink && drink.length ? 
              drink.map(drink => (
                <div key={drink.id} className='bg-peach flex w-3/4 text-center flex-col items-center justify-center border p-5 m-4 rounded-md'>
                  <h1 className='text-navy text-3xl capitalize mb-10'>{drink.name}</h1>
                  <h2 className='text-navy text-2xl mb-5'>Ingredients:</h2>
                  <div className='border border-navy p-2 rounded-md mb-10 w-1/2'>
                    {drink.ingredients ? 
                      drink.ingredients.map((ing, idx) => (
                        <li className='text-navy text-xl capitalize' key={idx}>{ing}</li>
                      ))
                    : null}
                  </div>
                  <h2 className='text-navy text-2xl mb-5'>Instructions:</h2>
                  <p className='text-navy text-xl normal-case'>{drink.instructions}</p>
                </div>
              ))
          : 
            <div className='mt-10'>
              <h1 className='text-2xl text-gray'>Nothing to show :(</h1>
            </div>
          }
        </div>
      </main>
    </>
  );
}

export default byname;