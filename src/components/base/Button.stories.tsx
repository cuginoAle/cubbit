import React from "react";
import ButtonComponent from "./Button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "/Base/Button",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "Click" },
    primary: {
      defaultValue: true,
    },
  },
};

export const Button: Story = (args) => {
  return (
    <ButtonComponent {...args}>
      {args.primary ? "Primary" : "Secondary"}
    </ButtonComponent>
  );
};
