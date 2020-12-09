import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  max-width: 540px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacer * 2}px;

  > .headerWrapper {
    background-color: ${({ theme }) => theme.palette.white};
    padding: ${({ theme }) => theme.spacer * 3}px 0;
  }
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
