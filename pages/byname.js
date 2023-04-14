import MenuIcon from '@mui/icons-material/Menu';

const byname = () => {
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
          <input className='w-1/2 h-10 mb-10 text-black rounded-md p-2'/>
          <button className='border rounded-md p-3 text-xl w-1/5'>Search Our Database</button>
        </div>
      </main>
    </>
  );
}

export default byname;