import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textBody.secondary};
  padding: ${({ theme }) => theme.spacer * 2}px;
  li {
    margin-bottom: ${({ theme }) => theme.spacer}px;
  }
  p {
    margin: 0;
    text-align: center;
    line-height: 1.4;
  }
`;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Component: React.FC<Props> = ({ className, children }: Props) => {
  const classes = ["CopyRights"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <li>
        <p>Copyright © 2019 Cubbit Srl. All rights reserved.</p>
      </li>
      <li>
        <p>REA: BO-528970; cubbit@pec.it</p>
      </li>
      <li>
        <p>
          VAT 03562001200 | Via della Zecca 1 - 40121 - Bologna (BO) - Italy
        </p>
      </li>
    </Wrapper>
  );
};

Component.displayName = "CopyRights";

export default Component;
