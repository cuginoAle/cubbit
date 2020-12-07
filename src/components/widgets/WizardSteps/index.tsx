import React from 'react';
import styled from 'styled-components';
import Step, { Props as StepInterface } from './Step';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;


export interface Props {
  className?: string;
  children?: React.ReactNode;
  steps?: Array<StepInterface>;
}

const Component: React.FC = ({ className, steps }: Props) => {

  const classes = ['WizardSteps']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      {steps && steps.map((step, index) => <Step key={step.label} {...{ ...step, index: index + 1 }} />)}
    </Wrapper>
  )
}

Component.displayName = 'WizardSteps'

export default Component