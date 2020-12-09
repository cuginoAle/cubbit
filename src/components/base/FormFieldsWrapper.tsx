import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding:${({ theme }) => theme.spacer * 4}px;
  >*:not(:last-child){
    margin-bottom:${({ theme }) => theme.spacer * 3}px;
  }
  >.sameLine {
    display: flex;
    margin: 0 -${({ theme }) => theme.spacer * 2}px;
    >*{
      margin: 0 ${({ theme }) => theme.spacer * 2}px;
    }
  }
`;

type Props = {
  className?: string;
  children?: React.ReactNode;
}

const Component: React.FC<Props> = ({ className, children }: Props) => {

  const classes = ['FormFieldsWrapper']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      {children}
    </Wrapper>
  )
}

Component.displayName = 'FormFieldsWrapper'

export default Component

type SameLineProps = {
  className?: string;
  children?: React.ReactNode;
}
export const SameLine: React.FC<SameLineProps> = ({ children }: SameLineProps) => {
  return (<div className="sameLine">{children}</div>)
}