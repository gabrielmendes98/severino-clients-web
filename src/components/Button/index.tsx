import { ReactNode, FC } from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
