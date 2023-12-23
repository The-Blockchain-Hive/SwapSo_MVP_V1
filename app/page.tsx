"use client"
import Navbar from './Home/navbar.jsx';
import FeaturedIn from './Home/featuredIn.jsx' 
import Partner from './Home/partner.jsx';
import JoinUs from './Home/JoinUs.jsx';
import ContactForm from './Home/contact.jsx';
import Footer from './Home/footer.jsx';
import Typewriter from 'typewriter-effect';
import Card from './components/Card.js';



export default function Home() {
    
  return (
    <main className="bg-gradient-to-r from-grad-start to-grad-end">
        <div className='nav1'>
          <Navbar/>
        </div>
        
      <div className="flex items-center justify-self-start justify-start h-screen bg-transparent text-white">
        <div className="flex justify-between w-screen h-1/2 px-12">
          <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome To
            <br />

            <Typewriter
              options={{              
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString('<span style="color: #b31c96; background-image: -webkit-linear-gradient(0deg, #b31c96 26%, #1e2dbd 100%, #6f54a4 47%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;">The Blockchain Hive!</span>')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1500)
                  typewriter.typeString('Innovation!')
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1000)
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }} />              
            
          </h1>
          <Card/>
        </div>
    </div>
        
        {/* <div className='about_us'>
          <h1
          className='font-bold mt-5' 
          style={{fontSize:'20px', fontFamily:'cursive', marginTop:'10rem'}}>
            The Blockchain Hive - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing user for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
          </h1>
        </div> */}
        <div>
          <FeaturedIn />
        </div>
      {/* <div>
        <Partner />
      </div> */}
      <div className='join_us-main'>
        <JoinUs />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}