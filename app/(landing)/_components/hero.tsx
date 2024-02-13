import { Button } from '@/components/ui/button';

import Image from 'next/image';

export const Hero = () => {
  return (

    <div className='container mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center'>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          ProjectTracker: Your Ultimate Project Collaboration and Time Management Solution
          <br className='hidden lg:inline-block' />
        </h1>
        <p className='mb-8 leading-relaxed'>
          Welcome to ProjectTracker Pro, a powerful platform designed to streamline your project management and time-tracking needs. Whether you are working solo or collaborating with a small team, our app is here to elevate your project experience.
        </p>
        <div className='flex w-full justify-center'>
          <Button size='lg'>

            Sign Up for free!

          </Button>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Image
          className='object-cover object-center rounded'
          alt='hero'
          src='https://dummyimage.com/720x600'
          width={720}
          height={600}
        />
      </div>
    </div>

  );
};
