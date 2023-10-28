import Navbar from './navbar/navbar.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='nav1'>
        <Navbar />
      </div>
      <div>        
        <h1 className='font-bold' style={{fontSize:'40px', fontFamily:'cursive'}}>THE BLOCKCHAIN HIVE</h1>
      </div>
    </main>
  )
}
