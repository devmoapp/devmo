import { SignInButton, SignUpButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full p-5 flex items-center bg-white border-b shadow-sm  '>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 sm:block sm:w-auto flex items-center justify-between w-full'>
          <Button
            size='sm'
            variant='outline'
            asChild
          >
            <SignInButton
              mode='modal'
              // children='Login'
              afterSignInUrl='/dashboard'
            >Login</SignInButton>
          </Button>
          <Button
            size='sm'
            asChild
          >
            <SignUpButton
              mode='modal'
              // children='Sign Up'
              afterSignUpUrl='/dashboard'
            >Sign Up</SignUpButton>
          </Button>
        </div>
      </div>
    </div>
  );
};
