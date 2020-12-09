import React from "react";
import styled from "styled-components";
import Card from "components/base/Card";

import { ReactComponent as WelcomeSvg } from "assets/svgs/swarn.svg";

const Wrapper = styled.div`
  ${Card} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacer * 4}px;
    > * {
      margin-bottom: ${({ theme }) => theme.spacer * 4}px;
    }

    text-align: center;
  }

  .notes {
    color: ${({ theme }) => theme.textBody.secondary};

    ${({ theme }) => theme.mediaQuery.large} {
      margin-top: ${({ theme }) => theme.spacer * 20}px;
    }
  }
`;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Component: React.FC<Props> = ({ className, children }: Props) => {
  const classes = ["ThankYou"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <Card>
        <WelcomeSvg />
        <h3>Welcome to the Swarn, John!</h3>
        <h4>
          We&apos;re processing your order and will send you a confirmation
          email shortly.
        </h4>

        <p className="notes">
          Please note VAT and other duties may be applied by customs according
          to your country’s legislation.
        </p>
      </Card>
    </Wrapper>
  );
};

Component.displayName = "ThankYou";

export default Component;
