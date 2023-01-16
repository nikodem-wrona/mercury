import { FC } from 'react'
import { Topbar } from '@/_shared/components'
import { Transactions } from './components'
import { Sidebar } from './components/Sidebar';

import styles from './Home.module.scss';
import { useSidebar } from './hooks';
import { Content } from './hooks/useSidebar';

export const Home: FC = () => {
  const { handleSetContent, content } = useSidebar();

  const renderContent = () => {
    switch (content) {
      case Content.Transactions:
        return <Transactions />
      default:
        return <Transactions />
    }
  }

  return (
    <div className={styles.homeWrapper}>
        <div className={styles.header}>
          <Topbar />
        </div>
        <div className={styles.sidebar}>
          <Sidebar 
            onTransactionsClick={() => handleSetContent(Content.Transactions)}
          />
        </div>
        <div className={styles.main}>
          {renderContent()}
        </div>
    </div>
  )
}
