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
  quantity?: number;
  children?: React.ReactNode;
  onChange?(value: number): void;
  name?: string;
}

const Component: React.FC = ({ className, quantity = 1, onChange = () => null, name }: Props) => {

  const classes = ['QuantityPicker']
  if (className) classes.push(className);

  function increment() {
    onChange(quantity + 1);
  }

  function decrement() {
    onChange(Math.max(quantity - 1, 1));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(Math.max(parseInt(e.target.value, 10) || 1, 1))
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <button onClick={decrement}>-</button>
      <input type='text' className="value" onChange={handleChange} value={quantity} name={name} />
      <button onClick={increment}>+</button>
    </Wrapper>
  )
}

Component.displayName = 'QuantityPicker'

export default Component