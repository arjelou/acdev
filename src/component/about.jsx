import { profile } from '../assets';
import { FaHtml5,FaCss3,FaJs } from "react-icons/fa";
import '../index.css';

export default function about() {
  return (
    <section id="about">
    <div className='h-screen pt-28 items-center sm:pt-5'>
        <div className="sm:grid-cols-1 md:grid-cols-1 grid grid-cols-2 sm:px-5 px-32 md:px-12">
            <div className="sm:hidden flex flex-col m-auto">
                <img className='drop-shadow-2xl' 
                src={profile} alt='profile_image' width={290} />
            </div>
            <div className="font-medium">
                <div className='md:pt-5'>
                    <h1 className='sm:text-xl mb-4 text-3xl font-medium secondaryColorText'>
                        ABOUT ME
                    </h1>
                </div>
                <p>
                I am a career shifter who transitioned from IT Support to becoming a Full Stack Web Developer. With 5 years of experience in IT Support, I bring valuable problem-solving skills to my development work. I have hands-on experience in React.js, Node.js, Express.js, MongoDB, MySQL, and I am actively learning new technologies such as CI/CD with Docker and AWS. My passion for continuous learning and adaptability make me a dedicated and versatile developer.
                <br /><br />
                I am a Full Stack Web Developer with a background in IT Support. With expertise in React.js, Node.js, Express.js, MongoDB, and MySQL, I bring a unique perspective and problem-solving skills to my development work. I am currently expanding my knowledge in CI/CD with Docker and AWS. I am passionate about continuous learning and excited to contribute to innovative and user-friendly applications.
                </p>
                <div className='mt-6 columns-2'>
                    <div>
                        <h1 className='font-bold'>NAME <br />
                            <span className='font-normal'>Arjelou Carampatana</span>
                        </h1>
                        <h1 className='font-bold mt-2'>EMAIL <br />
                            <span className='font-normal'>arjelou.jelou@gmail.com</span>
                        </h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>EDUCATION <br />
                            <span className='font-normal'>Multimedia IT</span>
                        </h1>
                        <h1 className='font-bold mt-2'>EMPLOYMENT <br />
                            <span className='font-normal'>Unemployed</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        {/* Skill Div */}
        <div className="primaryColor h-[120px] mt-[10%] text-teal-50 flex justify-center items-center pl-5">
            <div>
                <FaHtml5 size={60} title="HTML"/>
                <h2 className="text-center m-auto">HTML</h2>
            </div>
            <div>
                <FaCss3 size={60} title="HTML"/>
                <h2 className="text-center m-auto">CSS</h2>
            </div>
            <div>
                <FaJs size={60} title="HTML"/>
                <h2 className="text-center m-auto">JavaScript</h2>
            </div>
        </div>
    </div>
    </section>
  )
}
