import React from "react";
import ButtonComponent from "./Button";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "/Button",
  component: ButtonComponent,
};

export const Button: React.FC = () => {
  const isPrimary: boolean = boolean("Primary", true);
  return (
    <ButtonComponent {...{ primary: isPrimary }}>
      {isPrimary ? "Primary" : "Secondary"}
    </ButtonComponent>
  );
};
