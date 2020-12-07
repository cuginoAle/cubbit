import React from 'react';
import styled from 'styled-components';
import Section, { Props as SectionProps } from 'components/base/Section';

const Wrapper = styled.div`

`;

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Component: React.FC = ({ className }: Props) => {

  const classes = ['ContactInformation']
  if (className) classes.push(className);

  const sectionProps: SectionProps = {
    title: "Contact information",
    showBorder: true,
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <Section {...sectionProps}>
        <input type='text' name='email' />
      </Section>
    </Wrapper>
  )
}

Component.displayName = 'ContactInformation'

export default Component