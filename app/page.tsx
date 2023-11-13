import Navbar from './navbar/navbar.jsx';
import FeaturedIn from './featuredIn/featuredIn.jsx' 
import Partner from './partners/partner.jsx';
import JoinUs from './join_us/JoinUs.jsx';
import ContactForm from './contact/contact.jsx';
import Footer from './footer/footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className='nav1'>
          <Navbar />
        </div>
        <div className='about_us'>
          <h1
          className='font-bold mt-5' 
          style={{fontSize:'20px', fontFamily:'cursive', marginTop:'10rem'}}>
            The Blockchain Hive - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing user for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
          </h1>
        </div>
        <div>
          <FeaturedIn />
        </div>
      <div>
        <Partner />
      </div>
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
