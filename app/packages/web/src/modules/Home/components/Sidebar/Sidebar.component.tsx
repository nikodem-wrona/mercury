import { FC } from 'react'
import { FaMoneyBill } from 'react-icons/fa';

import styles from './Sidebar.module.scss';

type SidebarComponentProps = {
  onIncomesClick: () => void;
  onExpensesClick: () => void;
}

export const SidebarComponent: FC<SidebarComponentProps> = ({
  onIncomesClick,
  onExpensesClick,
}) => {
  return (
    <div className={styles.sidebarWrapper}>
      <ul className={styles.sidebarItemList}>
        <li onClick={onIncomesClick}>
          <div className={styles.icon}>
            <FaMoneyBill />
          </div>
          <div className={styles.label}>
            <span>
              Incomes
            </span>
          </div>
        </li>
        <li onClick={onExpensesClick}>
          <div className={styles.icon}>
            <FaMoneyBill />
          </div>
          <div className={styles.label}>
            <span>
              Expenses
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
