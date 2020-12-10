import React from "react";
import styled from "styled-components";
import { ReactComponent as Barclays } from "assets/svgs/barclays.svg";
import { ReactComponent as Tim } from "assets/svgs/tim.svg";
import { ReactComponent as EuropeanCommission } from "assets/svgs/europeanCommission.svg";
import { ReactComponent as Techstars } from "assets/svgs/techstars.svg";
import ExternalCredits, {
  Props as CreditsProp,
} from "components/base/ExternalCredits";

const Wrapper = styled.div``;

type Props = {
  className?: string;
};

const options: CreditsProp = {
  heading: "Funded by:",
  credits: [
    { key: "Barclays", svg: Barclays },
    { key: "Tim", svg: Tim },
    { key: "Europen Commission", svg: EuropeanCommission },
    { key: "Techstars", svg: Techstars },
  ],
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["FundedBy"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <ExternalCredits {...options} />
    </Wrapper>
  );
};

Component.displayName = "FundedBy";

export default Component;
