import React from "react";
import ThankYouComponent from "./ThankYou";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "/Widgets/Thank You",
  component: ThankYouComponent,
};

export const ThankYou: Story = () => {
  return <ThankYouComponent />;
};
