import React from 'react';
import WizardSteps, { Props as WizardProps } from 'components/widgets/WizardSteps';

// TODO: add here logic to set the active tile according to the route the user is in.
const options: WizardProps = {
  steps: [{
    label: "checkout",
    active: true
  },
  {
    label: "confirmation",
    active: false
  }]
}

const Component: React.FC = () => {
  return (<WizardSteps {...options} />)
}

Component.displayName = 'WizardStepsContainer';

export default Component;