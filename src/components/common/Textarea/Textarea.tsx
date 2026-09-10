import React from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.scss';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  description?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, description, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className={clsx(styles.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={clsx(styles.textarea, { [styles.hasError]: !!error })}
          {...props}
        />
        {description && !error && (
          <p className={styles.description}>{description}</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
