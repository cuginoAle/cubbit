import React from "react";
import CartItemComponent, { Props as ItemProps } from "./CartItem";
import { Story } from '@storybook/react/types-6-0';
import productPic from 'assets/cell.png';
import { select } from '@storybook/addon-knobs';

export default {
  title: "/Cart Item",
  component: CartItemComponent,
};

export const CartItem: Story = () => {
  const item: ItemProps = {
    item: {
      name: "Cool item",
      quantity: 1,
      unitPrice: 589,
      shippingCost: 0,
      percDiscount: 44,
      picUrl: productPic,
      currency: "€",
    },
    mode: select('Mode', ['default', 'compact'], 'default')
  }
  return (
    <CartItemComponent {...item} />
  );
};
