import React from 'react';
import styled from 'styled-components';
import Section, { Props as SectionProps } from 'components/base/Section';
import InputField from 'components/base/InputField';
import DropDown from 'components/base/DropDown';
import FieldsWrapper from 'components/base/FormFieldsWrapper';
import countries from 'helpers/europeanCountries';

const countriesList = countries.map(c => ({ label: c, value: c }))
const Wrapper = styled.div`
  
`;

export type Props = {
  className?: string;
}

const Component: React.FC<Props> = ({ className }: Props) => {

  const classes = ['ShippingAddress']
  if (className) classes.push(className);

  const sectionProps: SectionProps = {
    title: "Shipping address",
    showBorder: true,
  }


  return (
    <Wrapper className={classes.join(' ')}>
      <Section {...sectionProps}>
        <FieldsWrapper>
          <InputField {...{ name: 'street', label: "Street address" }} />
          <InputField {...{ name: 'otherInfo', label: "Other info (optional)" }} />
          <InputField {...{ name: 'postCode', label: "Post code" }} />
          <DropDown {...{ name: 'country', label: "Country", options: countriesList, placeholder: 'Select Country' }} />
          <InputField {...{ name: 'city', label: "City" }} />
          <InputField {...{ name: 'state', label: "State/Region/Province" }} />
        </FieldsWrapper>
      </Section>
    </Wrapper>
  )
}

Component.displayName = 'ShippingAddress'

export default Component