import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .fieldLabel {
    margin-left: 2px;
    margin-bottom:  ${({ theme }) => theme.spacer / 2}px;
  }
  input {
    font-size: 1.4rem;
    padding: .7em;
    border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
    border-radius:${({ theme }) => theme.radius}px;
    width: 100%;
  }
  &.validationError {
    input{
      border-color: ${({ theme }) => theme.validation.error};
    }
  }

  .validationErrorMessage {
    color:${({ theme }) => theme.validation.error};
    margin: ${({ theme }) => theme.spacer / 2}px 0 0 0;
    margin-left: 2px;
  }
`;

export type Props = {
  className?: string;
  label?: string;
  validationError?: string;
}

const Component: React.FC<Props> = ({ className, label, validationError, ...rest }: Props) => {

  const classes = ['InputField']
  if (className) classes.push(className);
  if (validationError) classes.push('validationError')

  return (
    <Wrapper className={classes.join(' ')}>
      {label && <span className='fieldLabel'>{label}</span>}
      <input {...rest} />
      {validationError && <p className='validationErrorMessage'>{validationError}</p>}
    </Wrapper>
  )
}

Component.displayName = 'InputField'

export default Component