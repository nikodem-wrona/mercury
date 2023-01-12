import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';

import { Home as HomeModule } from '@/modules/Home';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
   
  if (!isAuthenticated) return null;

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="layout">
          <HomeModule />
        </div>
      </div>
    </div>
  )
}
