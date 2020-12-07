import React from "react";
import SectionComponent, { Props as SectionProps } from "./Section";
import { Story } from '@storybook/react/types-6-0';
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "/Section",
  component: SectionComponent,
};

export const Section: Story<SectionProps> = () => {
  const title = text("title", "New section");
  const subTitle = text("sub title", "This is kinda cool");
  const showBorder = boolean("Show border", true);
  return (
    <SectionComponent
      {...{
        title,
        subTitle,
        showBorder
      }}
    >
      Some content
    </SectionComponent>
  )
};
