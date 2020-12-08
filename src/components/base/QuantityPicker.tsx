import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
  border-radius: ${({ theme }) => theme.radius}px;
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;

  button{
    font-size: inherit;
    border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
    border-radius: ${({ theme }) => theme.radius}px;
    width: 1.375em;
    height: 1.375em;
    padding: 0;
  }

  .value{
    width: 2em;    
    border: none;
    text-align: center;
    position: relative;
  }
  
`;

export interface Props {
  className?: string;
  initialQuantity?: number;
  children?: React.ReactNode;
  onChange?(value: number): void;
  name?: string;
}

const Component: React.FC = ({ className, initialQuantity = 1, onChange = () => null, name }: Props) => {
  const [qty, setQty] = useState(initialQuantity);

  const classes = ['QuantityPicker']
  if (className) classes.push(className);

  function increment() {
    const newValue = qty + 1;
    setQty(newValue);
    onChange(newValue);
  }

  function decrement() {
    const newValue = Math.max(qty - 1, 1);
    setQty(newValue);
    onChange(newValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Math.max(parseInt(e.target.value, 10) || 1, 1);
    setQty(newValue);
    onChange(newValue)
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <button type='button' onClick={decrement}>-</button>
      <input type='text' className="value" onChange={handleChange} value={qty} name={name} />
      <button type='button' onClick={increment}>+</button>
    </Wrapper>
  )
}

Component.displayName = 'QuantityPicker'

export default Component