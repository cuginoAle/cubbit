import React, { ReactNode } from "react";
import styled from "styled-components";
import BaseLayout, { MainContent, Aside } from "layouts/BaseLayout";
import Header from "components/widgets/Header";
import WizardStepsContainer from "components/containers/WizardStepsContainer";
import { SmallScreenOnly, LargeScreenOnly } from "helpers/responsive";
import AsSeenOn from "components/widgets/AsSeenOn";
import FundRaisingPlatforms from "components/widgets/FundRaisingPlatforms";
import FundedBy from "components/widgets/FundedBy";
import BenefitList from "components/widgets/BenefitList";
import OrderSummary from "components/widgets/OrderSummary";
import ContactInformation from "components/widgets/ContactInformation";
import ShippingAddress from "components/widgets/ShippingAddress";
import BillingInfo from "components/widgets/BillingInfo";
import PaymentMethods from "components/widgets/PaymentMethods";
import TermsAndConditions from "components/widgets/TermAndConsitions";
import Button from "components/base/Button";

import { useForm, FormProvider, useFormContext } from "react-hook-form";

const Wrapper = styled.div`
  min-height: 100%;
  height: 1px;

  ${Aside},
  ${MainContent} {
    > * {
      margin-bottom: ${({ theme }) => theme.spacer * 6}px;
    }
  }

  .CTAs {
    display: flex;
    justify-content: space-between;
  }

  #orderForm {
    display: contents;
  }
`;

export type Props = {
  className?: string;
  children?: ReactNode;
};

const Component: React.FC = ({ className }: Props) => {
  const methods = useForm();
  const classes = ["CheckoutPage"];
  if (className) classes.push(className);

  function onSubmit(data: any) {
    console.log(data);
  }
  console.log(methods.errors);

  return (
    <Wrapper className={classes.join(" ")}>
      <BaseLayout
        {...{
          header: <Header />,
        }}
      >
        <FormProvider {...methods}>
          <form
            noValidate
            id="orderForm"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <MainContent>
              <LargeScreenOnly>
                <WizardStepsContainer />
              </LargeScreenOnly>

              <ContactInformation />
              <ShippingAddress />
              <BillingInfo />
              <PaymentMethods />
              <TermsAndConditions />
              <div className="CTAs">
                <Button type="button">Back</Button>
                <Button type="submit" primary>
                  Buy Now
                </Button>
              </div>
            </MainContent>

            <Aside>
              <SmallScreenOnly>
                <WizardStepsContainer />
              </SmallScreenOnly>

              <OrderSummary />
              <BenefitList />
              <FundRaisingPlatforms />
              <AsSeenOn />
              <FundedBy />
            </Aside>
          </form>
        </FormProvider>
      </BaseLayout>
    </Wrapper>
  );
};

Component.displayName = "CheckoutPage";

export default Component;
