import React from 'react';

const SecondSection = () => {
  return (
    <div>
      <div className='bg-about-img bg-cover bg-center w-full min-h-screen flex flex-col justify-center'>
        <div className="bg-black bg-opacity-60 w-full min-h-full flex flex-col md:min-h-screen lg:min-h-screen items-center justify-center text-center px-4 py-10">
          <h1 className='text-white text-3xl mt-10 md:text-5xl font-semibold'>
            About <span className='ml-2 text-blue-500'>Us</span>
          </h1>
          <p className='text-white text-sm md:text-lg max-w-[90%] mx-auto'>
            The Boys' Brigade Limbe Field: a stalwart Christian organization committed to 
            fostering faith, character, and service among boys in Limbe, Cameroon.
          </p>

          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 w-full'>
            <div className='flex-1 flex items-center justify-center'>
              <img src="version.svg.png" alt="Version" className="w-[300px] h-[300px] object-cover" />
            </div>
            <div className='flex-1 flex flex-col justify-between'>
              <h3 className='text-white text-xl mb-3'>
                We Are Boys' Brigade Limbe Field
              </h3>
              <p className='text-white text-sm md:text-lg text-start mb-3 leading-6'>
                The Boys' Brigade Limbe Field, an integral component of the Cameroon 
                Baptist Convention, stands as a beacon of Christian discipleship and 
                spiritual nurturing in the vibrant city of Limbe, Cameroon.
              </p>
              <p className='text-white text-sm md:text-lg text-start mb-3 leading-6'>
                True to the movement's motto, "Sure and steadfast" (Hebrew 6:19b), 
                the brigade exemplifies unwavering commitment to instilling faith, 
                discipline, and purpose in the lives of boys within its ranks.
              </p>
              <p className='text-white text-sm text-start md:text-lg mb-3 leading-6'>
                Guided by the foundational principles of the Boys' Brigade, the aim 
                of the Limbe Field chapter is to preach the gospel, show love, and 
                actively seek to bring more boys to Christ.
              </p>
              <p className='text-white text-sm md:text-lg text-start mb-3 leading-6'>
                Through a rich tapestry of spiritual growth, character development, and 
                community outreach, the brigade empowers its members to affirm their faith, 
                serve their communities, and develop into holistic individuals rooted in Christian values.
              </p>
              <p className='text-white text-sm md:text-lg text-start mb-3 leading-6'>
                At the heart of its mission, the objective of the Boys' Brigade Limbe Field is 
                the advancement of Christ’s kingdom amongst boys, as well as the promotion of 
                habits of obedience, discipline, and self-respect—values that lead to true Christian manliness.
              </p>
              <p className='text-white text-sm md:text-lg text-start mb-5 leading-6'>
                Through the nurturing of these principles, the brigade cultivates a generation 
                of young men equipped to contribute positively to society, uphold moral integrity, 
                and serve as pillars of their communities.
              </p>

              <button className='bg-blue-950 text-white px-2 py-3 rounded-md'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
