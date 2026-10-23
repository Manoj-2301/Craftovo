/* React import */
import React, { useState } from 'react';

/** Libraries */
import { Controller, Control } from 'react-hook-form';

/** Local Imports */
import formfieldsData from '@/models/formfields.json';

/** Styles */
import defaultStyles from './custom-input-new.module.scss';

export interface CustomInputNewProps {
  name: string;
  control?: any;
  parent?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'tel';
  label?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  half?: boolean;
  className?: string;
  styles?: any;
  disabled?: boolean;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const CustomInputNew: React.FC<CustomInputNewProps> = ({
  name,
  control,
  parent,
  type = 'text',
  label,
  placeholder,
  required = false,
  rows = 5,
  half = false,
  className = '',
  styles: injectedStyles,
  disabled = false,
  autoComplete = 'off',
  value,
  onChange,
}) => {
  /** ---------- State & Hooks ---------- */
  const [isFocused, setIsFocused] = useState(false);
  const s = injectedStyles || defaultStyles;

  // Retrieve centralized label & placeholder if not explicitly provided
  const fieldMeta = parent && (formfieldsData as any)?.[parent]?.[name]
    ? (formfieldsData as any)[parent][name]
    : (formfieldsData as any)?.contact?.[name] || null;

  const displayLabel = label || fieldMeta?.label || (parent ? name : '');
  const displayPlaceholder = placeholder || fieldMeta?.placeholder || '';

  const InputWrapper = type === 'textarea' ? 'textarea' : 'input';

  /** ---------- Render ---------- */
  if (!control) {
    return (
      <div className={`${s?.inputGroup || defaultStyles.inputGroup} ${half ? (s?.half || defaultStyles.half) : ''} ${className}`.trim()}>
        {displayLabel && (
          <label className={s?.label || defaultStyles.label}>
            {displayLabel}
            {required && <span className={s?.required || defaultStyles.required}>*</span>}
          </label>
        )}
        <div className={s?.inputWrap || defaultStyles.inputWrap}>
          <InputWrapper
            name={name}
            type={type === 'textarea' ? undefined : type}
            rows={type === 'textarea' ? rows : undefined}
            placeholder={displayPlaceholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={type === 'textarea' ? (s?.textarea || defaultStyles.textarea) : (s?.input || defaultStyles.input)}
          />
        </div>
      </div>
    );
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={`${s?.inputGroup || defaultStyles.inputGroup} ${half ? (s?.half || defaultStyles.half) : ''} ${className}`.trim()}>
          {displayLabel && (
            <label className={s?.label || defaultStyles.label} htmlFor={name}>
              {displayLabel}
              {required && <span className={s?.required || defaultStyles.required}>*</span>}
            </label>
          )}
          <div className={s?.inputWrap || defaultStyles.inputWrap}>
            <InputWrapper
              {...field}
              id={name}
              value={field.value ?? ''}
              type={type === 'textarea' ? undefined : type}
              rows={type === 'textarea' ? rows : undefined}
              placeholder={displayPlaceholder}
              disabled={disabled}
              autoComplete={autoComplete}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
              onFocus={() => setIsFocused(true)}
              onBlur={(e: any) => {
                field.onBlur();
                setIsFocused(false);
              }}
              className={`
                ${type === 'textarea' ? (s?.textarea || defaultStyles.textarea) : (s?.input || defaultStyles.input)}
                ${error ? (s?.hasError || defaultStyles.hasError) : ''}
              `.trim()}
            />
          </div>
          {error && (
            <span id={`${name}-error`} className={s?.errorMessage || defaultStyles.errorMessage} role="alert">
              {error.message || fieldMeta?.error || 'This field is invalid'}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default CustomInputNew;
