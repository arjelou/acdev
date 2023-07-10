import { chatapp, b2b, website } from "../assets";
export default function portfolio() {
const portfolioList = [
  { 
    id: 1,
    name: 'Customer Management',
    description: 'A web application to help our organization manage client/customer inquiries and serve better services and enhancement our garments manufacturing production by using their feedback',
    image: b2b,
    link: 'https://ecommerce-arjelou.vercel.app/',
    repo: 'https://github.com/arjelou/ecommerce',
  },
  { 
    id: 2,
    name: 'Chat App',
    description: 'A chat web application in real-time communication. Features: user can signup and log in | and send messages to others. Tech stack: React, Node, MySQL, BootStrap, CSS.',
    image: chatapp,
    link: 'https://chatapp-arjelou.vercel.app/',
    repo: 'https://github.com/arjelou/chatappclient',
  },
  { 
    id: 3,
    name: 'EveMasy - Under development',
    description: 'Event Management is a web-based application designed to streamline the process of organizing and managing events.',
    image: website,
    link: '',
    repo: 'https://github.com/arjelou/evemasy',
  }
]
  return (
    <section id="portfolio">
    <div className="h-screen pt-28 sm:pt-5">
        <h1 className="sm:text-xl mb-4 text-3xl font-medium secondaryColorText">PORTFOLIO</h1> <br />
        <div className='sm:grid-cols-1 md:grid-cols-1 sm:flex-col grid grid-cols-3'>
            {portfolioList.map((list) =>(
            <div key={list.id} className="sm:mt-3 sm:shadow-xl relative bg-cover bg-no-repeat">
              <img src={list.image} alt={list.name}
              className="transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-black/30 cursor-pointer" />
              <div className="transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-black/30 cursor-pointer absolute bottom-0 left-0 right-0 px-4 py-2 md:px-6 md:py-5 sm:px-3 sm:py-3 bg-gray-800 opacity-75">
                <div className="flex space-x-2">
                  <h1 className="text-white font-bold text-xl sm:text-xl md:text-3xl">{list.name}</h1>
                  <a href={list.link}><i className="hover:bg-slate-50 hover:rounded-lg text-orange-700 text-xl sm:text-xl md:text-3xl ri-external-link-line"></i></a>
                  <a href={list.repo}><i className="hover:bg-slate-50 hover:rounded-lg text-orange-700 text-xl sm:text-xl md:text-3xl ri-github-line"></i></a>
                </div>
                  <p className="text-white md:text-xl sm:text-xs">{list.description}</p> 
              </div>
            </div>
            ))}
        </div>
    </div>
    </section>
  )
}
