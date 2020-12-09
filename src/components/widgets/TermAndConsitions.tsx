import React from "react";
import styled from "styled-components";
import Checkbox from "components/base/CheckBox";

const Wrapper = styled.div``;

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["TermsAndConditions"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <Checkbox name="terms">
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
