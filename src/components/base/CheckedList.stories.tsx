import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CheckedListComponent, { Props as ListProps } from './CheckedList';

export default {
  title: '/Checked List',
  component: CheckedListComponent,
};

export const CheckedList: Story = () => {

  const options: ListProps = {
    items: [
      "You will receive your Cell within 1 month in EU and US, and within 2-3 months in all other countries",
      "Guaranteed delivery or money back",
      "2 year warranty"
    ]
  }
  return (
    <CheckedListComponent {...options} />
  )
}
