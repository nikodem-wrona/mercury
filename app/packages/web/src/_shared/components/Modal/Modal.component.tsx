import { FC } from 'react';
import { Button } from '../Button';

import styles from './Modal.module.scss';

type ModalProps = {
  header: string;
  onClose: () => void;
  children: JSX.Element;
}

export const Modal: FC<ModalProps> = ({
  header,
  onClose,
  children,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerWrapper}>
          <div className={styles.title}>{header}</div>
          <div>
            <Button onClick={onClose} color="error">
              Close
            </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
