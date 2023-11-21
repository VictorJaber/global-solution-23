import { createRipple } from '@/utils/createRipple';

import { StyledButton } from './styles';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'contained' | 'outlined' | 'text';
  customColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  size = 'md',
  variant = 'contained',
  children,
  customColor,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      {...rest}
      $size={size}
      $variant={variant}
      $customColor={customColor}
      onClick={createRipple}
    >
      {children}
    </StyledButton>
  );
}
