import type { AppProps } from 'next/app';
import { Auth0Provider } from "@auth0/auth0-react";

import { ApiClient, ApiClientContext, useAuth0AccessTokenProvider } from '@/infrastructure'
import { config } from '@/config'

import '../styles/shared.scss';

const Root = ({ Component, pageProps }: AppProps) => {
  const accessTokenProvider = useAuth0AccessTokenProvider();
  const client = new ApiClient(accessTokenProvider);
  return (
      <ApiClientContext.Provider value={client}>
        <Component {...pageProps} />
      </ApiClientContext.Provider>
    );
}

export default function App(appProps: AppProps) {
  return (
      <Auth0Provider
        domain={config.auth0.domain}
        clientId={config.auth0.clientId}
        redirectUri={'http://localhost:3000'}
        audience={config.auth0.audience}
      >
          <Root {...appProps }/>
      </Auth0Provider>
  );
}

