import React from "react";
import styled from "styled-components";
import Section from "components/base/Section";
import { ReactComponent as Visa } from "assets/svgs/visa.svg";
import { ReactComponent as Maestro } from "assets/svgs/maestro.svg";
import { ReactComponent as Mastercard } from "assets/svgs/mastercard.svg";
import FormFieldsWrapper from 'components/base/FormFieldsWrapper';
import PymentDetailsFields from 'components/widgets/CheckoutFormFieldsets/PaymentDetails';


const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacer * 2}px;
    h5 {
      margin: 0;
    }
    li:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacer / 2}px;
    }
    svg {
      display: block;
    }
  }
  .cardsWrapper {
    display: flex;
    align-items: center;
  }

  .FormFieldsWrapper {
    background-color: white;
  }

  .footer {
    height: ${({ theme }) => theme.spacer * 6}px;
  }
`;

type Props = {
  className?: string;
};

const cards = [
  { key: "Visa", component: Visa },
  { key: "Mastercard", component: Mastercard },
  { key: "Maestro", component: Maestro },
];

const Component: React.FC<Props> = ({ className }: Props) => {
  const classes = ["PaymentMethods"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <Section
        darkBG={true}
        title="Payment methods"
        subTitle="All transactions are secure and encrypted."
      >
        <div className="header">
          <h5>Pay with credit card</h5>
          <ul className="cardsWrapper">
            {cards.map((card) => {
              const Svg = card.component;
              return (
                <li key={card.key}>
                  <Svg />
                </li>
              );
            })}
          </ul>
        </div>

        <FormFieldsWrapper>
          <PymentDetailsFields />
        </FormFieldsWrapper>

        <div className="footer" />
      </Section>
    </Wrapper>
  );
};

Component.displayName = "PaymentMethods";

export default Component;
