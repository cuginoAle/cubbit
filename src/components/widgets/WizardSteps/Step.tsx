import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Exagon } from 'assets/svgs/wizardStep.svg'

interface StyledProps {
  active: boolean;
}

const StyledStep = styled.li<StyledProps>`
  display: flex;
  align-items: center;

  .tile{
    display: flex;
    align-items: center;
    justify-content: center;
    color:${({ active, theme }) => active ? theme.palette.white : theme.palette.grey.light};
    position: relative;
    margin-right: ${({ theme }) => theme.spacer}px;
    .index {
      position: absolute;
      font-size: 1.6rem;
    }
    svg {
      width: 3.6rem;
    }
    path {
      fill: ${({ active, theme }) => active ? theme.palette.primary : theme.palette.white};
    }
  }
  .label {
    text-transform:uppercase;
    font-weight: 700;
  }
`

export interface Props {
  index?: number;
  label?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const Component: React.FC = ({ label, active = false, index }: Props) => {

  return (
    <StyledStep active={active}>
      <div className='tile'>
        <Exagon />
        <span className="index">{index}</span>
      </div>
      <span className="label">
        {label}
      </span>
    </StyledStep>
  )
}

Component.displayName = 'Step'

export default Component
