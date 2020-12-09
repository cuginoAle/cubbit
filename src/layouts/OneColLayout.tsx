import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

type Props = {
  className?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
};

const Component: React.FC<Props> = ({ className, children, header }: Props) => {
  const classes = ["OneColLayout"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <div className="headerWrapper">{header}</div>
      <MainContentWrapper>{children}</MainContentWrapper>
    </Wrapper>
  );
};

Component.displayName = "OneColLayout";

export default Component;
