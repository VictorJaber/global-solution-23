import { createRipple } from '@utils/rippleEffect';

import { StyledButton } from './styles';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button({ children }: ButtonProps) {
  return <StyledButton onClick={createRipple}>{children}</StyledButton>;
}
