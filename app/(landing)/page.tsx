import { features } from '@/constants/features';

import { Footer } from './_components/footer';
import { Hero } from './_components/hero';

const LandingPage = () => {
  return (
    <div className='pt-14'>
      <Hero />
      <div className='flex justify-center'>
        <div className='w-16 h-1 rounded-full bg-black inline-flex'></div>
      </div>
      <section className='text-gray-600 my-4'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            {features.map(feature => (
              <div
                className='p-4 md:w-1/3 flex flex-col text-center items-center'
                key={feature.name}
              >
                <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-black mb-5 flex-shrink-0'>
                  <feature.icon
                    className='h-6 w-6'
                    aria-hidden='true'
                  />
                </div>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 text-lg title-font font-bold mb-3'>{feature.name}</h2>
                  <p className='leading-relaxed text-base font-medium'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};
export default LandingPage;
