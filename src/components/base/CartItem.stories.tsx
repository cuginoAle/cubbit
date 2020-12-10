import React from "react";
import CartItemComponent, { Props as ItemProps } from "./CartItem";
import { Story } from "@storybook/react/types-6-0";
import productPic from "assets/cell.png";

export default {
  title: "/Base/Cart Item",
  component: CartItemComponent,
  argTypes: {
    onChange: { action: "Quantity changed" },
    mode: {
      control: {
        type: "radio",
        options: ["default", "compact"],
      },
      defaultValue: "default",
    },
  },
};

export const CartItem: Story = (args) => {
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
    mode: args.mode,
    onChange: args.onChange,
  };
  return <CartItemComponent {...item} />;
};
