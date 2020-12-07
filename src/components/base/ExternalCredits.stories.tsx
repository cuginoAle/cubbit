import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ReactComponent as Kickstarter } from 'assets/svgs/kickstarter.svg';
import { ReactComponent as Indiegogo } from 'assets/svgs/indiegogo.svg';
import ExternalCreditsComponent, { Props as CreditsProp } from './ExternalCredits';

export default {
  title: '/ExternalCredits',
  component: ExternalCreditsComponent,
};

const options: CreditsProp = {
  heading: "Some text",
  credits: [
    { key: "Kickstarter", svg: Kickstarter },
    { key: "Indiegogo", svg: Indiegogo }
  ]
}

export const ExternalCredits: Story = () => {

  return (
    <ExternalCreditsComponent {...options} />
  )
}
