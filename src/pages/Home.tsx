import React from 'react';
import { FaLinkedin, FaArrowRight } from 'react-icons/fa';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto lg:px-28 px-4  py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full">
            Hi everyone 👋, I'm Irez Abdullah
          </span>
        </div>
        <h1 className="lg:text-5xl text-4xl font-bold leading-normal mb-4">
          I`m
          Web Developer
          <br />
          Based in Sukabumi
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          An enthusiast website developer from Sukabumi, Indonesia.
        </p>
        <div className="flex items-center mb-6">
          <a className="bg-black btn text-white px-6 py-3 rounded-lg mr-4 flex items-center hover:bg-gray-800 transition" href="https://rezweb.my.id" target='_blank' >
          See More 
            <FaArrowRight className="ml-2" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Find me on:</span>
          <a className="text-gray-800 text-2xl mr-4 hover:text-black transition" href="https://www.linkedin.com/in/irez-abdullah/" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="md:w-80 mt-8 md:mt-0 relative flex justify-end">
        <div className="absolute inset-0 bg-white rounded-xl shadow-xl z-0" style={{ height: '340px', width: 'auto' }}>
        </div>
        <img
          alt="Portrait of Irez Abdullah"
          className="rounded-xl shadow-lg relative z-10 m-5"
          style={{ height: '340px', width: 'auto' }}
          src="https://res.cloudinary.com/dg6ktaklq/image/upload/v1732230457/irez-xupbb1_nidp7f.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
