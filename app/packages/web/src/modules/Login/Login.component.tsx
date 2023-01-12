import { FC } from 'react'
import { Button } from '@/_shared/components'

import styles from './Login.module.scss';

type LoginComponentProps = {
  handleLogin: () => void;
}

export const LoginComponent: FC<LoginComponentProps> = ({
  handleLogin,
}) => {
  return (
    <div className={styles.loginWrapper}>
      <Button color={'secondary'} onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}
