import { FC } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  label: string;
  value: string | number;
  type: 'input' | 'textarea' | 'number' | 'date';
  onChange: (value: string | number) => void;
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({
  label,
  value,
  type,
  onChange,
  disabled,
}) => {
  const renderInput = () => {
    switch (type) {
      case 'input':
        return (
          <input
            className={styles.input}
            value={value}
            onChange={(e) =>
              onChange(e.currentTarget.value)
            }
            disabled={disabled}
          />
        );

      case 'number': {
        return (
          <input
            type="number"
            className={styles.input}
            value={value}
            onChange={(e) =>
              onChange(Number(e.currentTarget.value))
            }
            disabled={disabled}
          />
        )
      }

      case 'date': {
        return (
          <input
            type="date"
            className={styles.input}
            value={value}
            onChange={(e) =>
              onChange(e.currentTarget.value)
            }
            disabled={disabled}
          />
        )
      }

      case 'textarea':
        return (
          <textarea
            className={styles.input}
            value={value}
            onChange={(e) =>
              onChange(e.currentTarget.value)
            }
            disabled={disabled}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>{label}</div>
      {renderInput()}
    </div>
  );
}
