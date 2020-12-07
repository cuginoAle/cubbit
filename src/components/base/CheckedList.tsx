import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Tick } from 'assets/svgs/tick.svg';

const Wrapper = styled.ul`
  padding: ${({ theme }) => theme.spacer * 2}px;
  background-color:${({ theme }) => theme.palette.white};
  border-radius:${({ theme }) => theme.radius}px;
  >li{
    display: flex;
    font-size: 1.6rem;
    line-height: 1.625;
    color:${({ theme }) => theme.palette.grey.light};
    margin-bottom: ${({ theme }) => theme.spacer * 2}px;
  }

  svg{
    flex-shrink:0;
    height: 2.4rem;
    margin-right: ${({ theme }) => theme.spacer}px;
  }
`;

export type Props = {
  className?: string;
  children?: React.ReactNode;
  items?: string[];
}

const Component: React.FC<Props> = ({ className, items = [] }: Props) => {

  const classes = ['CheckedList']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      {items.map(item => (
        <li key={item}>
          <Tick />
          <span>{item}</span>
        </li>
      ))}
    </Wrapper>
  )
}

Component.displayName = 'CheckedList'

export default Component