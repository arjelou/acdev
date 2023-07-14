// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () =>{

    const notify = () => toast.success('Your message has been sent');

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ce7qb48', 'template_v34jpe4', form.current, 'Ki_-V7Bo-7_1TT7LF')
      .then((result) => {
            
          console.log(result.text);
          notify()
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id="contact">
    <Toaster />
    <div className="h-screen pt-28 sm:pt-5">
        <h1 className="sm:text-xl mb-4 text-3xl font-medium secondaryColorText">CONTACT ME</h1>
        <div className="sm:flex sm:items-center sm:grid-cols-1 md:grid-cols-2 grid grid-cols-2 flex-col">
            <div className="primaryColor md:rounded-xl sm:rounded-xl rounded-xl w-[400px] md:w-[320px] sm:w-[350px]">
                <div className="flex-col space-y-3 p-5">
                    <h1 className="text-white font-bold text-4xl">
                        Get in Touch</h1>
                    <p className="text-white">
                        You can directly contact me here...</p>
                </div>
                <div className="flex space-x-5 items-center p-5">
                    <div className="h-10 w-10">
                        <i className="text-orange-500 ri-map-pin-2-line text-xl flex justify-center bg-[#06161a52] rounded-md p-2"></i>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Location:</h1>
                        <p className="text-white">Calinan, Davao City 8000</p>
                    </div>
                </div>
                <div className="flex space-x-5 items-center p-5">
                    <div className="h-10 w-10">
                        <i className="text-orange-500 ri-mail-line text-xl flex justify-center bg-[#06161a52] rounded-md p-2"></i>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Email:</h1>
                        <p className="text-white">arjelou.jelou@gmail.com</p>
                    </div>
                </div>
                <div className="flex space-x-5 items-center p-5">
                    <div className="h-10 w-10">
                        <i className="text-orange-500 ri-phone-line text-xl flex justify-center bg-[#06161a52] rounded-md p-2"></i>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Contact:</h1>
                        <p className="text-white">(+63) 976-395-9021 </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end sm:flex sm:items-center">
               <div>
                    <form className="p-5" ref={form} onSubmit={sendEmail}>
                        <div className="sm:justify-center">
                            <h1 className="sm:text-2xl secondaryColorText text-4xl font-semibold">Send a Message</h1>
                            <div className="mt-6 space-y-3 flex-col">
                                <input type="text" placeholder="Full Name" name='user_name' required
                                className="sm:w-[300px] md:w-[350px] w-[550px] border px-3 py-2 rounded-md bg-blue-100" />
                            </div>
                            <div className="mt-6 space-y-3 flex-col">
                                <input type="email" placeholder="Email Address" name='user_email' required
                                className="sm:w-[300px] md:w-[350px] w-[550px] border px-3 py-2 rounded-md bg-blue-100" />
                            </div>
                            <div className="mt-6 space-y-3 flex-col">
                                <textarea type="text" placeholder="Full Name" name='message' required
                                className="sm:w-[300px] md:w-[350px] w-[550px] border px-3 py-2 rounded-md bg-blue-100 h-[130px]" />
                            </div>
                            <div className="mt-6 space-y-3 flex-col">
                                <button className="secondaryColor py-3 px-5 rounded-md text-white font-semibold">
                                    Send a Messag
                                </button>
                            </div>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact;
