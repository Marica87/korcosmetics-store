import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

import Cart from '../Carts/Cart';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    
    

    return (
        
        <header className='header'>
            <div className='header-menu'>
            <div className="header-nav">
                <a href='#wrapper'  className="logo"  >Beauty&Kor</a>
                <div className="head-navbar">
                    <Cart  />
                    
                <nav className={open ? ["nav", "active"].join(' ') : "nav"}>
                    <ul className='navbar' >
                        <li className='nav-item'><a href='#catalog' className="nav-link">Каталог</a></li>
                        <li className='nav-item'><a href='#about' className="nav-link">О нас</a></li>
                        <li className='nav-item'><a href='#contact' className="nav-link">Контакты</a></li>
                       </ul>

                       
                    </nav> 
                    <button onClick={() => setOpen(!open)} className='nav-btn'>
                    {open ?  <AiOutlineClose  size={35} /> : <AiOutlineMenu  size={35}/>}
                                        
                    </button>

                
                </div>
                
            </div>
            </div> 

            <div className='container'> 
            <div className='header-banner'>              
            <div className="banner">   
               <h1 className='banner-text'>Позаботьтесь о своей коже с помощью лучших средств</h1>         
               <button  className="btn"><a href='#catalog' >Каталог</a></button>
            </div>
            </div>
            </div> 
            
            

           
        </header>
            
      
    )
    
    
}

export default Navbar;