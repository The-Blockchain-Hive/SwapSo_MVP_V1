import Navbar from './navbar/navbar.jsx';
import Partner from './partners/partner.jsx';
import JoinUs from './join_us/JoinUs.jsx';
import ContactForm from './contact/contact.jsx';
import Footer from './footer/footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='gradient-bg'>
        <div className='nav1'>
          <Navbar />
        </div>
        <div>
          <h1 className='font-bold' style={{fontSize:'40px', fontFamily:'cursive', marginTop:'20px'}}>THE BLOCKCHAIN HIVE</h1>
        </div>
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
