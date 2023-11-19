import { createRipple } from '@/utils/createRipple';

import { StyledButton } from './styles';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button({ children }: ButtonProps) {
  return <StyledButton onClick={createRipple}>{children}</StyledButton>;
}
