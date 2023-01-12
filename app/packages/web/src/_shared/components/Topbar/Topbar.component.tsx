import { FC } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';

import styles from './topbar.module.scss';

export const Topbar: FC = () => {
  const { user } = useAuth0();

  const renderUserImage = () => {
    if (!user) {
      return;
    }

    return (
      <div className={styles.profile}>
        <div className={styles.userImageWrapper}>
          <Image alt="Profile image" width={40} height={40} className={styles.userImage} src={user.picture || ''} />
        </div>
        <div className={styles.nameWrapper}>
          {user.name}
        </div>
      </div>
     
    )
  }

  return (
    <div className={styles.topbarWrapper}>
      <div className={styles.topbarContent}>
        <div>
          Mercury
        </div>
        {renderUserImage()}
      </div>
    </div>
  )
}
