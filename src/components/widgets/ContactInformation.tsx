import React from 'react';
import styled from 'styled-components';
import Section, { Props as SectionProps } from 'components/base/Section';
import InputField from 'components/base/InputField';
import FieldsWrapper, { SameLine } from 'components/base/FormFieldsWrapper';

const Wrapper = styled.div`
  
`;

export type Props = {
  className?: string;
}

const Component: React.FC<Props> = ({ className }: Props) => {

  const classes = ['ContactInformation']
  if (className) classes.push(className);

  const sectionProps: SectionProps = {
    title: "Contact information",
    showBorder: true,
  }

  return (
    <Wrapper className={classes.join(' ')}>
      <Section {...sectionProps}>
        <FieldsWrapper>
          <InputField {...{ name: 'email', label: "Email" }} />
          <InputField {...{ name: 'phoneNum', label: "Phone number" }} />
          <SameLine>
            <InputField {...{ name: 'firstName', label: "First name" }} />
            <InputField {...{ name: 'lastName', label: "Last name" }} />
          </SameLine>
        </FieldsWrapper>
      </Section>
    </Wrapper>
  )
}

Component.displayName = 'ContactInformation'

export default Component