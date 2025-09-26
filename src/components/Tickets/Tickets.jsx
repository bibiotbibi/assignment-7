import React, {  useState, } from 'react';
import calender from '../../assets/ri_calendar-line.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const statusColors = {
    "Open": "bg-green-100 text-green-700",
     "In Progress": "bg-yellow-100 text-yellow-700",
    "Resolved": "bg-blue-100 text-blue-700",
    "Closed": "bg-gray-100 text-gray-700"
};

const priorityColors = {

    "Low": "text-[#02A53B]",    
    "Medium":" text-[#FEBB0C]",
    "High": "text-[#F83044]",
    "Critical":"text-red-800"
};



const Tickets = ({ ticketsPromise, setInprogressCount ,setResolvedCount}) => {
    // const ticket = use(ticketsPromise);
    const [tickets, setTickets] = useState([]);

    React.useEffect(() => {
        ticketsPromise.then(data => setTickets(data));
    }, [ticketsPromise]);


    
    const [taskTickets, setTaskTickets] = useState([]);

    const [resolvedTickets, setResolvedTickets] = useState([]);

 
    const handleAddTicket = (ticketss) => {
        const exists = taskTickets.some(t => t.id === ticketss.id);
        if (!exists){
            setTaskTickets([...taskTickets, ticketss]);
            setInprogressCount(prev => prev + 1);
             toast.success(`"${ticketss.title}" In Progress`);
        }
    }

    const handleComplete = (id) => {
        const ticketToResolve = taskTickets.find(t => t.id === id);
        if(ticketToResolve) {
            setTaskTickets(taskTickets.filter(t => t.id !== id));
            setResolvedTickets([...resolvedTickets, ticketToResolve]);    
            setInprogressCount(prev => prev - 1);
            setResolvedCount(prev => prev +1);
            toast(`"${ticketToResolve.title}" Complete `);
        }
    }

    const handleRemoveResolved = (id) => {
        const updateResolved = resolvedTickets.filter(r => r.id !== id);
        setResolvedTickets(updateResolved);
        
    }
    // console.log(ticket);
    return (
        <div className='w-11/12 flex mx-auto gap-7'>
        
       
         <div className='w-9/12'>
          <div className='font-bold text-xl mb-4'>Customer Tickets</div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
               {
                tickets.map(ticketss =>
                    <div 
                    key={ticketss.id}
                    onClick={() => handleAddTicket(ticketss)}
                 className=" shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-lg ">
                        <div className="p-5 text-sm">
                            <div className='flex items-center justify-between space-y-3'>
                                <h2 className="card-title">{ticketss.title}</h2>
                                <p className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[ticketss.status]}`}>
                                    {ticketss.status}
                                </p>
                            </div>
                            <p className='text-[#627382] mb-1'>{ticketss.description}</p>
                            <div className='md:flex justify-between'>
                                <div className='flex gap-3 items-center '>
                                    <p className='text-[#627382]'>{ticketss.ticketNumber}</p>
                                    <p className={`px-2 py-1 rounded-full text-sm font-semibold ${priorityColors[ticketss.priority]}`}>
                                        {ticketss.priority}
                                    </p>
                            </div>
                                <div className='flex gap-3'>
                                    <p className='text-[#627382]'>{ticketss.customer}</p>
                                    <img src={calender} alt="" />
                                    <p className='text-[#627382]'>{ticketss.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
         </div>
         </div>

          
            <div className='w-3/12'>
                 <div>
                 <h3 className='font-bold text-xl mb-4'>Task Status</h3>
            <p className='text-[#627382] text-sm'>Select a ticket to add to Task Status</p>
             </div>


             {taskTickets.length > 0 ? (
          <div className="space-y-3">
            {taskTickets.map(t => (
              <div key={t.id} className="p-4 shadow-md rounded-lg bg-white">
                <h4 className="font-semibold mb-2 ">{t.title}</h4>
                  <button onClick={() => handleComplete(t.id)} 
                  className="btn btn-sm bg-[#02A53B] w-full text-white">
                  Complete
                </button>
              </div>
            ))}
          </div>
        ) : 
        (<p className="text-sm text-gray-500">No tasks selected yet.</p>)}


                <div className='mt-6'>
                    <h3 className='font-bold text-xl mb-4'>Resolved Task</h3> 
                    {resolvedTickets.length > 0 ? (
                        <ul className='space-y-2'>
                                {resolvedTickets.map(r => (
                                <li key={r.id} className='p-3 shadow rounded flex justify-between bg-blue-50 text-blue-700 '>✅  {r.title}
                                    <button onClick={() => handleRemoveResolved(r.id)}
                                    className='text-sm text-gray-400  mt-5 font-light'>Click to remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                    <p className='text-[#627382] text-sm '>No resolved tasks yet.
                    </p> )}
                </div>
            </div>
            
            <ToastContainer position="top-right" autoClose={3000} />
          
        </div>
    );
};

export default Tickets;