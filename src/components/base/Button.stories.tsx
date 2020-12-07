import React from "react";
import ButtonComponent from "./Button";
import { Story } from '@storybook/react/types-6-0';
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "/Button",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'Click' }
  }
};

export const Button: Story = (args) => {
  const isPrimary: boolean = boolean("Primary", true);
  return (
    <ButtonComponent {...{ primary: isPrimary }} {...args}>
      { isPrimary ? "Primary" : "Secondary"}
    </ButtonComponent >
  );
};
