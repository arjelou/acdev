import React from 'react';
import { navLinks } from '../constant/navLinks';
import { logo, close, menu } from '../assets';
// import { NavLink } from 'react-router-dom';
import '../index.css'
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            
        }
    }
    openToggle = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
            }));
        }
        
  render() {
    return (
        <nav className='sticky top-0 z-10 w-full sm:py-3 py-6 justify-between items-center navbar sm:px-5 px-32 primaryColor md:px-12'>
        {/* Desktop and tablet view */}
            <img src={logo} alt='Evemasy-logo' 
            className='sm:w-[100px] sm:h-[28px] w-[138px] h-[38px] absolute items-center'/> 
        <ul className='sm:hidden list-none hidden justify-end items-center flex-1'>
            {navLinks.map((navLink, index) =>(
            <li key={navLink.id}
                className={`${index === navLink.length-1 ? 'mr-0' : 'mr-10'} primaryColorText font-poppins font-normal cursor-pointer`}>
                <a href={navLink.id}>
                    {navLink.title}
                </a>
            </li>
            ))}

            
        </ul>
       
        {/* Mobile view */} 
        <div className='navbar flex flex-1 justify-end items-center w-full '> 
           <img src={this.state.toggle ? close : menu} 
            alt='menu' className='w-[38px] h-[38px] object-contain cursor-pointer ml-5'
            onClick={this.openToggle}/>
            <div className={`${this.state.toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1 px-32'>
                    <>
                        {navLinks.map((navLink, index) =>(
                            <li key={navLink.id}
                                className={`${index === navLink.length-1 ? 'mr-0' : 'mb-4'} text-white font-poppins font-normal cursor-pointer`}>
                                <a href={navLink.id}>
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                    </>    
                </ul>
            </div>
        </div>
    </nav>
  )
}
}
