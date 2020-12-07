import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
  border-radius: ${({ theme }) => theme.radius}px;
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;

  button{
    font-size: inherit;
    margin: -1px;
    border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
    border-radius: ${({ theme }) => theme.radius}px;
    width: 1.375em;
    height: 1.375em;
    padding: 0;
  }

  .value{
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;

export interface Props {
  className?: string;
  quantity?: number;
  children?: React.ReactNode;
  onChange?(value: number): void;
}

const Component: React.FC = ({ className, quantity = 1, onChange = () => null }: Props) => {

  const classes = ['QuantityPicker']
  if (className) classes.push(className);

  function increment() {
    const newValue = quantity + 1;
    onChange(newValue);
  }

  function decrement() {
    const newValue = Math.max(quantity - 1, 1);
    onChange(newValue);
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <button onClick={decrement}>-</button>
      <span className="value">
        {quantity}
      </span>
      <button onClick={increment}>+</button>
    </Wrapper>
  )
}

// Component.displayName = 'QuantityPicker'

export default Component