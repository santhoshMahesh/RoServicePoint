import React from 'react';

const About = () => {
  return (
    <div id="#about_us" className='w-4/5 bg-glass my-10 mx-auto p-10 flex  flex-col-reverse md:flex-row justify-between items-center gap-6'>
      <div className='md:w-1/2'>
        <h1 className='text-2xl my-2 text-[#1d4ed8] font-bold '>About myself</h1>
        <p className='text-xl mb-2'>I'm Putte Gowda, and I specialize in servicing and repairing domestic RO UV water purifiers. With 12 years of experience and a passion for clean water, I provide expert solutions for your purification needs. From routine maintenance to repairs, I ensure your purifier operates at its best, delivering safe drinking water for your home.</p>
        <figcaption className="font-medium">
          <div className="text-sky-500 font-bold text-xl dark:text-sky-400">Putte Gowda</div>
          <div className="text-slate-700 dark:text-slate-500">RO Service Engineer, UC</div>
        </figcaption>
      </div>
      <img className='object-cover h-52 mx-auto rounded-md' src='./repairer.jpg' alt="wait for it" />
    </div>
  );
};

export default About;