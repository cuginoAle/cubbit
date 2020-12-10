import React from "react";
import WizardSteps from "components/widgets/WizardSteps";

type Props = {
  pathname: string;
};

const Component: React.FC<Props> = ({ pathname }: Props) => {
  const options = {
    steps: [
      {
        label: "checkout",
        active: true,
      },
      {
        label: "confirmation",
        active: pathname === "/thankyou",
      },
    ],
  };

  return <WizardSteps {...options} />;
};

Component.displayName = "WizardStepsContainer";

export default Component;
