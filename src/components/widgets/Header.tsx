import React from 'react';
import styled from 'styled-components';
import Logo from 'components/base/Logo';

const Wrapper = styled.div`
  >.Logo{
    margin: auto;
  }
`;

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Component: React.FC = ({ className }: Props) => {

  const classes = ['Header']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <Logo />
    </Wrapper>
  )
}

Component.displayName = 'Header'

export default Component