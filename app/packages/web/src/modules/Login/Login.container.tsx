import { FC } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginComponent } from './Login.component'

export const LoginContainer: FC = () => {
  const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();

  const handleLogin = () => {
    try {
      void loginWithRedirect();

    } catch (e) {
      console.log(e)
    }
  }

  // const handleLogout = () => {
  //   void logout({ returnTo: 'http://localhost:3000' })
  // }

  return <LoginComponent handleLogin={handleLogin} />
}
