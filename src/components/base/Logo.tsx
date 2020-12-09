import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/svgs/cubbitLogo.svg";

type StyledProp = {
  width?: number;
};

const Wrapper = styled.div<StyledProp>`
  width: ${({ width }) => width}px;
`;

export type Props = {
  className?: string;
  width?: number;
};

const Component: React.FC<Props> = ({ className, width = 108 }: Props) => {
  const classes = ["Logo"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")} width={width}>
      <Logo />
    </Wrapper>
  );
};

Component.displayName = "Logo";

export default Component;
