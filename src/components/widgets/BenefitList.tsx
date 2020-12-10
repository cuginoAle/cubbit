import React from "react";
import CheckedList from "components/base/CheckedList";

type Props = {
  className?: string;
};

const benefits = [
  "You will receive your Cell within 1 month in EU and US, and within 2-3 months in all other countries",
  "Guaranteed delivery or money back",
  "2 year warranty",
];

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["BenefitList"];
  if (className) classes.push(className);

  return <CheckedList items={benefits} />;
};

Component.displayName = "BenefitList";

export default Component;
