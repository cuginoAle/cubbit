import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/svgs/cubbitLogo.svg';

interface StyledProp {
  width?: number
}

const Wrapper = styled.div<StyledProp>`
  width: ${({ width }) => width}px;
`;

export interface Props {
  className?: string;
  width?: number;
  children?: React.ReactNode;
}

const Component: React.FC = ({ className, width = 108 }: Props) => {

  const classes = ['Logo']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')} width={width}>
      <Logo />
    </Wrapper>
  )
}

Component.displayName = 'Logo'

export default Component