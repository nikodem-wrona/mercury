import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';

import { LoginModule } from '@/modules/Login';

export default function IndexPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth0();
  console.log(user, isAuthenticated);

  if (isAuthenticated) {
    router.push('/home');
  }

  return (
      <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="layout">
          <LoginModule />
        </div>
      </div>
    </div>
  )
}

