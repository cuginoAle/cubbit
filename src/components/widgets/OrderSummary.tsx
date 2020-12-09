import React from "react";
import styled from "styled-components";
import Section from "components/base/Section";
import CartItem, { Props as ItemProps } from "components/base/CartItem";
import cubbitCellPict from "assets/cell.png";
import { useIsSmall } from "helpers/responsive";

const Wrapper = styled.div`
  .sectionContent {
    border-color: ${({ theme }) => theme.palette.grey.normal};
  }
`;

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["OrderSummary"];
  if (className) classes.push(className);
  const isMobile = useIsSmall();

  const itemOption: ItemProps = {
    mode: isMobile ? "compact" : "default",
    item: {
      name: "Cubbit cell",
      quantity: 1,
      shippingCost: 0,
      percDiscount: 44,
      picUrl: cubbitCellPict,
      unitPrice: 589,
      currency: "€",
    },
  };

  return (
    <Wrapper className={classes.join(" ")}>
      <Section title="Order summary">
        <CartItem {...itemOption} />
      </Section>
    </Wrapper>
  );
};

Component.displayName = "OrderSummary";

export default Component;
