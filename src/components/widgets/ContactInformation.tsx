import React from "react";
import styled from "styled-components";
import Section from "components/base/Section";
import FieldsWrapper from "components/base/FormFieldsWrapper";
import ContentInfoFields from "components/widgets/CheckoutFormFieldsets/ContactInformation";

const Wrapper = styled.div``;

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["ContactInformation"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <Section title="Contact information">
        <FieldsWrapper>
          <ContentInfoFields />
        </FieldsWrapper>
      </Section>
    </Wrapper>
  );
};

Component.displayName = "ContactInformation";

export default Component;
