import React from "react";
import styled from "styled-components";
import OneColLayout from "layouts/OneColLayout";
import Header from "components/widgets/Header";
import WizardStepsContainer from "components/containers/WizardStepsContainer";

const Wrapper = styled.div``;

type Props = {
  className?: string;
  location: Location;
};

const Component: React.FC<Props> = ({ className, location }: Props) => {
  const classes = ["ThankYouPageContainer"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <OneColLayout header={<Header />}>
        <WizardStepsContainer pathname={location.pathname} />
      </OneColLayout>
    </Wrapper>
  );
};

Component.displayName = "ThankYouPageContainer";

export default Component;
