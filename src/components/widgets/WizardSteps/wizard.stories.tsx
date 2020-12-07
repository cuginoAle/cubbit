import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { object } from '@storybook/addon-knobs';
import WizardStepsComponent, { Props as WizardProps } from 'components/widgets/WizardSteps';

export default {
  title: '/WizardSteps',
};

export const WizardSteps: Story = () => {

  const options: WizardProps = {
    steps: [
      object("step_1", {
        label: "checkout",
        active: true
      }),
      object("step_2", {
        label: "confirmation",
        active: false
      })
    ]
  }
  return (
    <WizardStepsComponent {...options} />
  )
}
