import { NextResponse } from 'next/server';
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/dashboard"
      //if user is logged in and try to access the public route
      const dashboard = new URL(path, req.url)
      return NextResponse.redirect(dashboard)

    }
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
      //if the user is not loggedin and he is also not present in the public route then we will redirect him to sign in
    }


    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
