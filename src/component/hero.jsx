import { Link } from 'react-scroll';
import { profile } from '../assets';
import '../index.css';
export default function hero() {
  return (
    <section id="home">
    <div className='sm:px-2 sm:h-[530px] md:h-[530px] sm:pt-0 pt-28 h-screen primaryColor items-center px-32 md:px-12'>
        {/* Disktop View */}
        <div className="sm:grid-cols-1 grid grid-cols-2 items-center">
            <div className="sm:text-center sm:space-y-1 font-medium flex flex-col space-y-3">
                <h1 className='sm:text-xs text-white text-xl sm:pt-5'>
                    Hello, Im
                </h1>
                <h1 className='sm:text-3xl text-white text-5xl'>
                    Arjelou <span className='secondaryColorText'>Carampatana</span>
                </h1>
                <h1 className='sm:text-xl text-2xl text-white'>
                    a <span className=''>Web Developer</span>
                </h1>
                {/* START Display in Mobile View */}
                <div className="xls:hidden md:hidden lg:hidden xl:hidden 2xl:hidden sm:flex flex flex-col sm:items-center">
                    <img className='drop-shadow-2xl object-cover sm:w-[300px]' 
                    src={profile} alt='profile_image' width={490} />
                </div>
                {/* END Display in Mobile View */}
                <div className='mt-4 sm:pt-4 sm:flex sm:justify-center'>
                    <Link activeClass="active" spy to='contact'>
                        <button className='secondaryColor secondaryColorHover sm:py-1 py-2 sm:px-2 px-4 rounded-md text-white'>
                            HIRE ME
                        </button>
                    </Link>
                    <Link activeClass="active" spy to='portfolio'>
                        <button className='secondaryColorText hover:underline ml-4 outline outline-1 sm:py-1 sm:px-2 py-2 px-4 rounded-md'>
                            VIEW MY PORTFOLIO
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col sm:hidden justify-center">
                <img className='drop-shadow-2xl object-cover sm:w-[300px]' 
                src={profile} alt='profile_image' width={450} />
            </div>
        </div>
    </div>
    </section>
  )
}
