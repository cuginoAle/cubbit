import React from "react";
import { Story } from "@storybook/react/types-6-0";
import LogoComponent, { Props as LogoProps } from "./Logo";

export default {
  title: "/Base/Logo",
  component: LogoComponent,
};

export const Logo: Story<LogoProps> = () => {
  return <LogoComponent />;
};
