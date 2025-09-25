
import './App.css'
import bannerImg from "./assets/vector1.png"
import bannerImg2 from "./assets/vector2.png"
import navImg from "./assets/Vector.png"
function App() {

  return (
    <>
     <div className="navbar border-gray-100  border-b-2 w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-semibold">CS — Ticket System</a>
  </div>
  <div className="flex gap-4 items-center ">
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
</div>


<section className='grid grid-cols-2 gap-7 w-[1200px] mx-auto mt-20'>
  <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex justify-between w-[600px] h-[250px] rounded-2xl items-center'> 
    <img className='' src={bannerImg} alt="" />
    <div className=' '>
      <p className='text-white text-xl'>In-Progress</p>
      <button className=' text-white font-bold text-6xl'>0</button>
    </div>
    <img className='flip-x-[-10]' src={bannerImg2} alt="" />
  </div>
  <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] flex justify-between w-[600px] h-[250px] rounded-2xl items-center'>
    <img src={bannerImg} alt="" />
     <div>
      <p className='text-white text-xl'>Resolved</p>
     <button className='text-white font-bold text-6xl'>0</button>
     </div>
    <img src={bannerImg2} alt="" />
  </div>
</section>
    </>
  )
}

export default App
