import React from "react";
import QuantityPickerComponent from "./QuantityPicker";
import { Story } from '@storybook/react/types-6-0';

export default {
  title: "/Quantity Picker",
  component: QuantityPickerComponent,
};

export const QuantityPicker: Story = () => {
  return (
    <QuantityPickerComponent />
  );
};
