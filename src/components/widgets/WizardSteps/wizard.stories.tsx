import React from "react";
import { Story } from "@storybook/react/types-6-0";
import WizardStepsComponent from "components/widgets/WizardSteps";

const defaultSteps = [
  {
    label: "checkout",
    active: true,
  },
  {
    label: "confirmation",
    active: false,
  },
  {
    label: "last step",
    active: false,
  },
];

export default {
  title: "/Widgets/Wizard Steps",
  argTypes: {
    steps: {
      control: {
        type: "text",
      },
      defaultValue: JSON.stringify(defaultSteps),
    },
  },
};

export const WizardSteps: Story = (args) => {
  let steps = [];

  try {
    steps = JSON.parse(args.steps);
  } catch (error) {
    steps = defaultSteps;
  }

  return <WizardStepsComponent steps={steps} />;
};
