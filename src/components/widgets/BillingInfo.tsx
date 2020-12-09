import React, { useState } from "react";
import styled from "styled-components";
import Section from "components/base/Section";
import FieldsWrapper from "components/base/FormFieldsWrapper";
import RadioButton from "components/base/RadioButton";
import ShippingAddressFields from "components/widgets/CheckoutFormFieldsets/ShippingAddress";

const Wrapper = styled.div`
  .helpNotes {
    margin-top: 0;
  }
`;

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const [sameBillingAddress, setSameBillingAddress] = useState(true);

  const classes = ["BillingInfo"];
  if (className) classes.push(className);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSameBillingAddress(e.target.value === "same");
  }

  return (
    <Wrapper className={classes.join(" ")}>
      <Section title="Billing information">
        <FieldsWrapper>
          <h4 className="helpNotes">
            Please provide us with your billing information, so we can send you
            an invoice after order confirmation.
          </h4>
          <RadioButton
            onChange={handleChange}
            value="same"
            defaultChecked={true}
            name="billingInfo"
          >
            Use my shipping address
          </RadioButton>
          <RadioButton onChange={handleChange} value="other" name="billingInfo">
            Use a different address
          </RadioButton>
          {!sameBillingAddress && (
            <ShippingAddressFields namePrefix="billing_" />
          )}
        </FieldsWrapper>
      </Section>
    </Wrapper>
  );
};

Component.displayName = "BillingInfo";

export default Component;
