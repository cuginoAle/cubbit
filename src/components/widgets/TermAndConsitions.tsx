import React from "react";
import styled from "styled-components";
import Checkbox from "components/base/CheckBox";
import { useFormContext } from "react-hook-form";
import getValidationError from "helpers/validationErrors";

const Wrapper = styled.div``;

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["TermsAndConditions"];
  if (className) classes.push(className);
  const { errors } = useFormContext();

  return (
    <Wrapper className={classes.join(" ")}>
      <Checkbox
        validationRules={{ required: true }}
        validationError={
          errors.terms ? getValidationError(errors.terms.type) : undefined
        }
        name="terms"
      >
        I agree to the&nbsp;
        <a href="http://Some_Nice_Url">Terms and Conditions</a>&nbsp; and the
        &nbsp;
        <a href="http://Some_Nice_Url">Privacy policy</a>
      </Checkbox>
    </Wrapper>
  );
};

Component.displayName = "TermsAndConditions";

export default Component;
