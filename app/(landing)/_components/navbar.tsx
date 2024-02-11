import { SignInButton, SignUpButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 flex items-center bg-gray-800'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 sm:block sm:w-auto flex items-center justify-between w-full'>
          <Button
            size='sm'
            variant='secondary'
            asChild
          >
            <SignInButton
              mode='modal'
              children='Login'
              afterSignInUrl='/dashboard'
            />
          </Button>
          <Button
            size='sm'
            asChild
          >
            <SignUpButton
              mode='modal'
              children='Sign Up'
              afterSignUpUrl='/dashboard'
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
