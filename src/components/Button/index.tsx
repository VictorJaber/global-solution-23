import { createRipple } from '@/utils/createRipple';

import { StyledButton } from './styles';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'contained' | 'outlined' | 'text';
  customColor?: string;
};

export function Button({
  size = 'md',
  variant = 'contained',
  children,
  customColor,
}: ButtonProps) {
  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $customColor={customColor}
      onClick={createRipple}
    >
      {children}
    </StyledButton>
  );
}
