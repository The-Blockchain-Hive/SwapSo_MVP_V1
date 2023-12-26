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
    <main className="gradient-bg">
      <video 
      autoPlay 
      muted 
      loop
      height="50vh" 
      className="absolute z-[-1] w-full object-cover">
        <source src="/landing.mp4" type="video/mp4" />
        </video>
        <div className='nav1'>
          {/* <Navbar/> */}
        </div>
        
      <div className="flex items-center justify-self-start justify-start h-screen bg-transparent text-white">
        <div className="flex justify-center  w-screen h-1/2 px-12">
          <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <Typewriter
              options={{              
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString(
                  '<span style="color: #b31c96; background-image: -webkit-linear-gradient(0deg, #b31c96 26%, #1e2dbd 100%, #6f54a4 47%); background-clip: text; -webkit-background-clip: text; text-align: center; text-fill-color: transparent; -webkit-text-fill-color: transparent">BUY.LEARN.EARN</span>')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1500)
                  .start();
              }} />                 
          </h1>
          {/* <Card/> */}
        </div>
      </div>        
      <div className='about_us mt-32'>
      <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">About Us</h2>
      <video 
      autoPlay 
      muted 
      loop
      height="50vh" 
      className="absolute z-[-1] w-full object-cover">
      <source src="/about_us.mp4" type="video/mp4" />
      </video>
        <div className='w-2/4 mx-auto mb-12 mt-32'>
          <h1 className='text-center text-justify text-2xl mx-8 mt-12'>
            The Blockchain Hive - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing user for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
          </h1>
        </div>
      </div>
        <div className='mt-24'>
          <FeaturedIn />
        </div>
        <div>
          <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">Our Mission</h2>
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