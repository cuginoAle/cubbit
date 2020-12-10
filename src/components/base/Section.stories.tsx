import React from "react";
import SectionComponent from "./Section";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "/Base/Section",
  component: SectionComponent,
  argTypes: {
    title: { control: "text", defaultValue: "Section Title" },
    subTitle: { control: "text", defaultValue: "Sub title" },
    noBorder: { control: "boolean", defaultValue: false },
  },
};

export const Section: Story = (args) => {
  return (
    <SectionComponent {...args}>Add some content here...</SectionComponent>
  );
};
