import React from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  description?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, description, id, options, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className={clsx(styles.wrapper, className)}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={selectId}
            className={clsx(styles.select, { [styles.hasError]: !!error })}
            {...props}
          >
            <option value="" disabled>Select an option</option>
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className={styles.icon} size={20} />
        </div>
        {description && !error && (
          <p className={styles.description}>{description}</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';
