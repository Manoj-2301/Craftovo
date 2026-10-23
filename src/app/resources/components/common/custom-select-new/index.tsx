/* React import */
import React from 'react';

/** Libraries */
import { Controller, Control } from 'react-hook-form';
import { ChevronDown } from 'lucide-react';

/** Styles */
import defaultStyles from './custom-select-new.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface CustomSelectNewProps {
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
  half?: boolean;
  className?: string;
  styles?: any;
  disabled?: boolean;
}

export const CustomSelectNew: React.FC<CustomSelectNewProps> = ({
  name,
  control,
  label,
  placeholder = 'Select an option',
  options = [],
  required = false,
  half = false,
  className = '',
  styles: injectedStyles,
  disabled = false,
}) => {
  /** ---------- State & Hooks ---------- */
  const s = injectedStyles || defaultStyles;

  /** ---------- Render ---------- */
  if (!control) {
    return (
      <div className={`${s?.inputGroup || defaultStyles.inputGroup} ${half ? (s?.half || defaultStyles.half) : ''} ${className}`.trim()}>
        {label && (
          <label className={s?.label || defaultStyles.label}>
            {label}
            {required && <span className={s?.required || defaultStyles.required}>*</span>}
          </label>
        )}
        <div className={s?.selectWrap || defaultStyles.selectWrap}>
          <select
            name={name}
            disabled={disabled}
            className={s?.select || defaultStyles.select}
            defaultValue=""
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className={s?.arrowIcon || defaultStyles.arrowIcon}>
            <ChevronDown size={18} />
          </div>
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
          {label && (
            <label className={s?.label || defaultStyles.label} htmlFor={name}>
              {label}
              {required && <span className={s?.required || defaultStyles.required}>*</span>}
            </label>
          )}
          <div className={s?.selectWrap || defaultStyles.selectWrap}>
            <select
              {...field}
              id={name}
              disabled={disabled}
              value={field.value ?? ''}
              aria-invalid={!!error}
              className={`
                ${s?.select || defaultStyles.select}
                ${error ? (s?.hasError || defaultStyles.hasError) : ''}
              `.trim()}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className={s?.arrowIcon || defaultStyles.arrowIcon}>
              <ChevronDown size={18} />
            </div>
          </div>
          {error && (
            <span className={s?.errorMessage || defaultStyles.errorMessage} role="alert">
              {error.message || 'Please make a selection'}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default CustomSelectNew;
