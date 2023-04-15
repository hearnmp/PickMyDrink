import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center text-center bg-blue">
        <div className="mb-10">
          <h1 className="text-4xl mb-5 text-gray">Welcome to Pick My Drink!</h1>
          <h1 className="text-3xl text-gray">Let us help you find your new favorite cocktail!</h1>
        </div>
        <div className=" flex w-4/5 flex-row justify-evenly">
          <Link className="text-yellow drop-shadow-2xl font-bold ease-in-out duration-500 hover:-translate-y-2 rounded-md p-5 text-xl bg-orange border-yellow border-4" href='/byingredient'>By Ingredient</Link>
          <Link className="text-yellow drop-shadow-2xl font-bold ease-in-out duration-500 hover:-translate-y-2 rounded-md p-5 text-xl bg-orange border-yellow border-4" href='/byname'>By Drink Name</Link>
        </div>
      </main>
    </>
  )
}
