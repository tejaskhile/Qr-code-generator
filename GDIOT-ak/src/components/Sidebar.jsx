import React, { useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {

    const [open, setOpen] = useState(false);
    const toggle =()=> setOpen(!open);


return (
    <>
      <div className="container">
        <div className="sidebar"
          style = {{ width: open ? "250px" : "50px",
                     padding: open ? "0" : "0 auto",
                     transform: "all 0.3s ease"
                  }}>
            <div className="logo">
              {/* to hide logo/name in case sidebar is closed */}
                {open && <h2>Logo/Name</h2>}        
                <i className="fa-solid fa-bars" 
                onClick={toggle} ></i>
            </div>
            <ul className='sidebar-items'>
                <li className='items'
                style = {{ width: open ? "100%" : "45px", padding: "5px"}}
                >
                    <NavLink to="/dashboard">
                        <i className="fa-solid fa-house btn"></i>
                        {open && <span>Dashboard</span> }
                    </NavLink>
                </li>
                <li className='items'
                style = {{ width: open ? "100%" : "45px", padding: "5px"}}>
                    <NavLink to='/beneficiaries'>
                        <i className="fa-solid fa-user"></i>
                        {open && <span>Beneficiaries</span> }
                    </NavLink>
                       
                </li>
                <li className='items'
                style = {{ width: open ? "100%" : "45px", padding: "5px"}}>
                  <NavLink to='/centers'>
                        <i className="fa-solid fa-building-columns"></i>
                        {open && <span>Centers</span> }
                  </NavLink>
                        
                </li>
                <li className='items'
                style = {{ width: open ? "100%" : "45px", padding: "5px"}}>
                  <NavLink to='/interventions'>
                         <i className="fa-solid fa-syringe"></i>
                         {open && <span>Interventions</span> }
                  </NavLink>
                        
                </li>
                <li className='items'
                style = {{ width: open ? "100%" : "45px", padding: "5px"}}>
                  <NavLink to='/help&settings'>
                        <i className="fa-solid fa-gear"></i>
                        {open && <span>Help & Settings</span> }
                  </NavLink>
                       
                </li>
                
            </ul>
            <div>
               {
                open && <button> <i className="fa-solid fa-right-from-bracket"></i>
                LogOut</button>
              }
            </div>
            
          
                 
                    
        </div>
         <div>
             <main className='pages'>{children} </main>
         </div>
      </div>
    </>
  )
}

export default Sidebar
