import React from "react";
import styled from "styled-components";
import Card from "components/base/Card";

const Wrapper = styled.div``;

export type Props = {
  className?: string;
  title?: string;
  subTitle?: string;
  noBorder?: boolean;
  children?: React.ReactNode;
  darkBG?: boolean;
};

const Component: React.FC<Props> = ({
  className,
  title,
  subTitle,
  children,
  noBorder = false,
  darkBG = false,
}: Props) => {
  const classes = ["Section"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      {title && <h3>{title}</h3>}
      {subTitle && <h4 className="subTitle">{subTitle}</h4>}

      <Card noBorder={noBorder} darkBG={darkBG}>
        {children}
      </Card>
    </Wrapper>
  );
};

Component.displayName = "Section";

export default Component;
