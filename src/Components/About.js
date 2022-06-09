import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#180A0A]  '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#3FF6701]  text-gray-300 '>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold text-[#FF6701]' >
                <p>Hi. I'm Shakhawath, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p className=' text-[#8892b0]'>I am passionate about building excellent website that improves
                the lives of those around me. I specialize in creating web-application
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a web developer expert available at your fingertips?</p>  
              </div>
              
            </div>
        </div>
        
      </div>
    );
};

export default About;