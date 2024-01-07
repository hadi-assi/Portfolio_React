import React, { useState, useEffect } from 'react';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';



const ContactForm = () => {

  const [userMessage, setuserMessage] = React.useState({ name: '', email: '' , message: '' })
  const handleSubmit = async(e) => {
    e.preventDefault();

    setSubmitted(true);

    
    await fetch('http://localhost:8080/send', {
      method: 'POST',
      redirect :'manual',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userMessage),
    })
    .then(response => response.json())
    .then(data => {
        console.log('message recvieved:', data);
        alertify.success("message recieved");
    }
    )
    .catch(error => 
        {console.error('Error sending message:', error)
        alertify.error("message couldnt be sent");

    });

    setuserMessage(prevMessage => ({ ...prevMessage, message:'' }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserMessage(prevMessage => ({ ...prevMessage, [name]: value }));
    console.log(userMessage);
  };

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      // Reset the submitted state after 5 seconds
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [submitted]);
  





  return (
    
<div id="ContactMeForm" className="flex items-center min-h-full">
  <div className="container  mx-auto ">
    <div className="max-w-2xl mx-auto my-10 p-5 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-3 text-3xl mx-auto font-semibold text-[#a668ff] text-center">
          Contact Me
        </h1>
        <p className="text-gray-400 dark:text-gray-300">
          Fill up the form below to send me a message.
        </p>
      </div>
      <div classNameName="m-7">

        <form onSubmit={handleSubmit} id="form" >
          <div className="mb-6">
            <label for="name" className="block mb-2 text-md text-gray-200">Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-black text-black bg-[#8c8c8c] text-sm focus:outline-none" value={userMessage.name} onChange={handleChange}/>
          </div>
          <div className="mb-6">
            <label for="email" className="block mb-2 text-md text-gray-200">Email Address</label>
            <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-black text-black bg-[#8c8c8c] text-sm focus:outline-none" value={userMessage.email} onChange={handleChange}/>
          </div>
          
          <div className="mb-6">
            <label for="message" className="block mb-2 text-md text-gray-200">Message</label>
           

            <textarea name="message" id="message" placeholder='Your Message' 
            required
            className="w-full px-3 py-2 h-32 rounded-sm placeholder-black text-black  text-sm focus:outline-none bg-[#8c8c8c]"
            style={{resize : 'none'}} 
            value={userMessage.message}
            onChange={handleChange}
            /> 

            
          </div>

          <div className="mb-6">
            <button className="w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none"
            disabled={submitted}
            
            >
                send message
            </button>
           
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
export default ContactForm
