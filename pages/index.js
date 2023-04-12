import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="mb-10">
        <h1 className="text-4xl mb-5">Welcome to Pick My Drink!</h1>
        <h1 className="text-3xl">Let us help you find your new favorite cocktail!</h1>
      </div>
      <div className=" flex w-4/5 flex-row justify-evenly">
        <Link className="border rounded-md p-5 text-xl" href='/byingredient'>By Ingredient</Link>
        <Link className="border rounded-md p-5 text-xl" href='/byname'>By Drink Name</Link>
      </div>
    </main>
  )
}
