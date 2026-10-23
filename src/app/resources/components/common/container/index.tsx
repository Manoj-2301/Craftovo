/* React import */
import React from 'react';

/** Styles */
import styles from './container.module.scss';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', style }) => {
  return (
    <div className={`${styles.container} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

export default Container;
