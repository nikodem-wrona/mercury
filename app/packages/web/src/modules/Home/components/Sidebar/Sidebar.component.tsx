import { FC } from 'react'
import { FaMoneyBill } from 'react-icons/fa';

import styles from './Sidebar.module.scss';

type SidebarComponentProps = {
  onTransactionsClick: () => void;
}

export const SidebarComponent: FC<SidebarComponentProps> = ({
  onTransactionsClick,
}) => {
  return (
    <div className={styles.sidebarWrapper}>
      <ul className={styles.sidebarItemList}>
        <li onClick={onTransactionsClick}>
          <div className={styles.icon}>
            <FaMoneyBill />
          </div>
          <div className={styles.label}>
            <span>
              Transactions
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
