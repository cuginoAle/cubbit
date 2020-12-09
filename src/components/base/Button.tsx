import React from "react";
import styled from "styled-components";

interface StyledProps {
  primary?: boolean;
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  primary?: boolean;
  onClick?(): void;
};

const Wrapper = styled.button<StyledProps>`
  align-items: center;
  background-color: ${({ primary, theme }) =>
    primary ? theme.palette.primary : theme.palette.white};
  color: ${({ primary, theme }) =>
    primary ? theme.palette.white : theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  display: flex;
  font-family: inherit;
  font-size: 1.6rem;
  justify-content: center;
  padding: ${({ primary, theme }) =>
    `${theme.spacer}px ${theme.spacer * (primary ? 6 : 4)}px`};
  border-radius: ${({ theme }) => theme.button.radius}px;
  box-shadow: ${({ theme, primary }) =>
    primary ? theme.shadows.primary : theme.shadows.secondary};
  outline-color: ${({ theme }) => theme.palette.primary};
`;

const Button: React.FC<Props> = ({
  className,
  primary,
  children,
  onClick,
  ...rest
}: Props) => {
  const classes = ["Button"];
  if (className) classes.push(className);

  return (
    <Wrapper
      className={classes.join(" ")}
      primary={primary}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

Button.displayName = "Button";

export default Button;
