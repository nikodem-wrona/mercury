import { FC } from 'react'
import { Topbar } from '@/_shared/components'
import { Incomes, Expenses } from './components'
import { Sidebar } from './components/Sidebar';

import styles from './Home.module.scss';
import { useSidebar } from './hooks';
import { Content } from './hooks/useSidebar';

export const Home: FC = () => {
  const { handleSetContent, content } = useSidebar();

  const renderContent = () => {
    switch (content) {
      case Content.Incomes:
        return <Incomes />
      case Content.Expenses:
        return <Expenses />
      default:
        return <Incomes />
    }
  }

  return (
    <div className={styles.homeWrapper}>
        <div className={styles.header}>
          <Topbar />
        </div>
        <div className={styles.sidebar}>
          <Sidebar 
            onExpensesClick={() => handleSetContent(Content.Expenses)} 
            onIncomesClick={() => handleSetContent(Content.Incomes)}
          />
        </div>
        <div className={styles.main}>
          {renderContent()}
        </div>
    </div>
  )
}
