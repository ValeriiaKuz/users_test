import type { ButtonProps } from '../../types/buttonTypes';
export const Button = ({ type, className, onClick, children }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
