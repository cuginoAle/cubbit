import React from "react";
import styled from "styled-components";
import Section from "components/base/Section";
import FieldsWrapper from "components/base/FormFieldsWrapper";
import ShippinAddressFields from "components/widgets/CheckoutFormFieldsets/ShippingAddress";

const Wrapper = styled.div``;

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["ShippingAddress"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <Section title="Shipping address">
        <FieldsWrapper>
          <ShippinAddressFields namePrefix="address_" />
        </FieldsWrapper>
      </Section>
    </Wrapper>
  );
};

Component.displayName = "ShippingAddress";

export default Component;
