import type { ReactNode } from 'react';

export interface ButtonProps {
  type: 'submit' | 'reset';
  className: string;
  onClick?: () => void;
  children?: ReactNode;
}
