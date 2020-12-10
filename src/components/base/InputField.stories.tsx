import React from "react";
import InputFieldComponent from "./InputField";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "/Base/Input Field",
  component: InputFieldComponent,
  argTypes: {
    onChange: { action: "Change" },
    name: {
      control: "text",
      defaultValue: "username",
      table: {
        disable: true,
      },
    },
    label: {
      control: "text",
      defaultValue: "User name",
    },
    defaultValue: {
      control: "text",
      defaultValue: "John Doe",
      table: {
        disable: true,
      },
    },
    validationError: {
      control: "text",
    },
  },
};

export const InputField: Story = (args) => <InputFieldComponent {...args} />;
