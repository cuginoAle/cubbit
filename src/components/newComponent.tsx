import React from 'react';
import styled from 'styled-components';

type ComponentProps = {
  className: string;
}

const Wrapper = styled.div`

`;

const Component = ({ className, ...props }: ComponentProps) => {

  const classes = ['']
  className && classes.push(className)

  return (
    <Wrapper className={classes.join(' ')}>

    </Wrapper>
  )
}

Component.displayName = ''

export default Component