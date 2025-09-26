
import './App.css'
import bannerImg from "./assets/vector1.png"
import bannerImg2 from "./assets/vector2.png"
import navImg from "./assets/Vector.png"
import navImg2 from "./assets/3dot.png"
import footerImg1 from "./assets/tw.png"
import footerImg2 from "./assets/li.png"
import footerImg3 from "./assets/fb.png"
import footerImg4 from "./assets/em.png"
import { Suspense, useState } from 'react'
import Tickets from './components/Tickets/tickets'





const ticketsPromise = fetch('./data.json')
.then(res => res.json())

function App() {

const [inProgressCount, setInprogressCount] = useState(0);
const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <div className="navbar border-gray-100  border-b-2 md:w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-2xl font-bold">CS — Ticket System</a>
        </div>
        <div className="hidden md:flex gap-4 items-center ">
          <p><a>Home</a></p>
          <p>FAQ</p>
          <p>Changelog</p>
          <p>Blog</p>
          <p>Download</p>
          <p>Contact</p>
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <img src={navImg} alt="" />
            New Ticket</button>
        </div>
        <div className='dropdown md:hidden'>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 border-0 bg-white"><img className='w-5' src={navImg2} alt="" /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <p>Home</p>
              <p>FAQ</p>
              <p>Changelog</p>
              <p>Blog</p>
              <p>Download</p>
              <p>Contact</p>
            </ul>
          </div>
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <img src={navImg} alt="" />
            New Ticket</button>
        </div>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1200px] mx-auto mt-20 mb-20'>
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex justify-between w-full h-[200px] rounded-2xl items-center'>
          <img className='w-60 md:w-full' src={bannerImg} alt="" />
          <div className=''>
            <p className='text-white text-xl'>In-Progress</p>
              <span className=' text-white font-bold text-6xl'>{inProgressCount}</span>
          </div>
          <img  className='w-60 md:w-full'  src={bannerImg2} alt="" />
        </div>
        <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] flex justify-between w-full h-[200px] rounded-2xl items-center'>
          <img className='w-60 md:w-full' src={bannerImg} alt="" />
          <div>
            <p className='text-white text-xl'>
              Resolved</p>
            <span className='text-white font-bold text-6xl'>{resolvedCount}</span>
          </div>
                 <img className='w-60 md:w-full' src={bannerImg2} alt="" />
        </div>
      </section>



<Suspense fallback={<h3>...</h3>}>
 <Tickets ticketsPromise={ticketsPromise}
 setInprogressCount={setInprogressCount}
 setResolvedCount={setResolvedCount}
 ></Tickets>
</Suspense>





      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-10  ">
        <nav className='w-50 '>
          <h6 className="font-semibold text-xl text-white mb-2">CS — Ticket System</h6>
          <a className="link link-hover text-[#A1A1AA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-xl text-white mb-2">Company</h6>
          <a className="link link-hover text-[#A1A1AA]">About Us</a>
          <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
          <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-xl text-white mb-2">Services</h6>
          <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
          <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
          <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-xl text-white mb-2">Information</h6>
          <a className="link link-hover text-[#A1A1AA]">Privacy policy</a>
          <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
          <a className="link link-hover text-[#A1A1AA]">Join Us</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-xl text-white mb-2">Social Links</h6>
          <div className='flex gap-1'>
            <img src={footerImg1} alt="" />
            <a className="link link-hover text-[#A1A1AA]"> @CS — Ticket System</a>
          </div>
          <div className='flex gap-1'>
            <img src={footerImg2} alt="" />
            <a className="link link-hover text-[#A1A1AA]"> @CS — Ticket System</a>
          </div>
          <div className='flex gap-1'>
            <img src={footerImg3} alt="" />
            <a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a>
          </div>
          <div className='flex gap-1'>
            <img src={footerImg4} alt="" />
            <a className="link link-hover text-[#A1A1AA]">support@cst.com</a>
          </div>

        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-[#E5E7EB] p-4 ">
        <aside className='border-t-1 w-full  md:w-[1200px]'>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>

    </>
  )
}

export default App
