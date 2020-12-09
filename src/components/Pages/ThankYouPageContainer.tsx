import React from "react";
import styled from "styled-components";
import OneColLayout from "layouts/OneColLayout";
import Header from "components/widgets/Header";
import WizardStepsContainer from "components/containers/WizardStepsContainer";
import ThankYou from "components/widgets/ThankYou";
import CopyRights from "components/base/CopyRights";
import { RouteComponentProps } from "react-router-dom";

const Wrapper = styled.div`
  .mainContent {
    > * {
      margin-bottom: ${({ theme }) => theme.spacer * 4}px;
    }
  }
`;

type Props = RouteComponentProps & {
  className?: string;
};

const Component: React.FC<Props> = ({ className, location }: Props) => {
  const classes = ["ThankYouPageContainer"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <OneColLayout header={<Header />}>
        <div className="mainContent">
          <WizardStepsContainer pathname={location.pathname} />
          <ThankYou />
        </div>
        <CopyRights />
      </OneColLayout>
    </Wrapper>
  );
};

Component.displayName = "ThankYouPageContainer";

export default Component;
