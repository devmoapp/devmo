import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='text-gray-600 mb-2'>
      <div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Quis tellus eget adipiscing
            <br className='hidden lg:inline-block' />
          </h1>
          <p className='mb-8 leading-relaxed'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote
            bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
            chambray.
          </p>
          <div className='flex w-full justify-center'>
            <Button size='lg'>Sign Up for free!</Button>
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
    </section>
  );
};
