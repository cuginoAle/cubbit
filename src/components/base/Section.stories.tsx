import React from "react";
import SectionComponent from "./Section";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "/Section",
  component: SectionComponent,
};

export const Section: React.FC = () => {
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
