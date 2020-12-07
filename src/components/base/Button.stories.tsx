import React from "react";
import ButtonComponent from "./Button";
import { Story } from '@storybook/react/types-6-0';
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "/Button",
  component: ButtonComponent,
};

export const Button: Story = () => {
  const isPrimary: boolean = boolean("Primary", true);
  return (
    <ButtonComponent {...{ primary: isPrimary }}>
      {isPrimary ? "Primary" : "Secondary"}
    </ButtonComponent>
  );
};
