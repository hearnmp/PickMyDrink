import { useState } from 'react';

const byingredient = () => {
  const [ searchParams, setSearchParams ] = useState('')
  const [ drink, setDrink ] = useState(null)
  const [ searched, setSearched ] = useState(false)
  const API_Key = process.env.API_KEY
  const header = {
    headers: { 'X-Api-Key': `${API_Key}`}
  }
  const handleSubmit = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/cocktail?ingredients=${searchParams}`, header)
    const data = await res.json()
    setSearched(true)
    setDrink(data)
  }
  
  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen min-w-full bg-blue">
        <div className='mt-35 w-screen'>
          {searched ? 
            <div className='flex items-center justify-center w-full text-center' onClick={() => setSearched(false)}>
              <h1 className='text-4xl mb-5 mt-8 text-navy hover:cursor-pointer'>Return to search</h1>
            </div>
          :
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-10 text-navy">Looking for something new?<br/>Enter your ingredients below</h1>
              <h1 className="text-3xl mb-5 text-navy">Separate ingredients by commas</h1>
              <h1 className='text-2xl text-navy'>Ex. Vodka, Lemon Juice</h1>
            </div>
            <div className="flex flex-col items-center w-3/4 m-auto">
              <input 
                className='w-1/2 h-10 mb-10 bg-gray text-navy rounded-md p-2' 
                onChange={event => setSearchParams(event.target.value)}/>
              <button
                className='text-yellow drop-shadow-2xl font-bold ease-in-out duration-500 hover:-translate-y-2 rounded-md p-5 text-xl bg-orange border-yellow border-4 w-1/5'
                onClick={() => handleSubmit()}
              >Search Drink Options</button>
            </div>
          </>}
        </div>
        <div className='flex justify-center items-center flex-col w-full'>
          {searched ?
            drink && drink.length ? 
                drink.map(drink => (
                  <div key={drink.id} className='flex w-3/4 text-center flex-col items-center justify-center border p-5 m-4 rounded-md bg-peach'>
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
                <h1 className='text-2xl text-navy'>Sorry, it looks like we don't know any drinks that contain those ingredients</h1>
              </div>
          :
          null
          }
        </div>
      </main>
    </>
  );
}

export default byingredient;