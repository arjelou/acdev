// import './App.css';
import './index.css';
import { Hero, About, Portfolio, Navbar } from './component';
import Contact from './constant/Contact';
// import styles from './style';

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div className='sm:mt-10 mt-20'>
        <About />
      </div>
      <div className='mt-10 md:-mt-[200px] sm:mt-[60px] sm:px-5 px-32 md:px-12'>
        <Portfolio />
      </div>
      <div className='mt-10 px-32 md:px-12 sm:mt-60 md:mt-[990px]'>
        <Contact />
      </div>
    </div>
  )
}

export default App
