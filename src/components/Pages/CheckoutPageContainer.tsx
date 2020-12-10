import React from "react";
import styled from "styled-components";
import TwoColLayout, { MainContent, Aside } from "layouts/TwoColLayout";
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
import { RouteComponentProps } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

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
    .buttonsWrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${({ theme }) => theme.spacer * 2}px;
    }
    .formInvalidMessage {
      text-align: right;
    }
  }

  #orderForm {
    display: contents;
  }

  .formInvalidMessage {
    color: ${({ theme }) => theme.palette.accent};
  }
`;

type Props = RouteComponentProps & {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
  location,
  history,
}: Props) => {
  const methods = useForm();
  const classes = ["CheckoutPage"];
  if (className) classes.push(className);

  function onSubmit(data: Record<string, unknown>) {
    console.log(data);
    history.push("/thankyou");
  }

  function formIsInvalid() {
    return Object.keys(methods.errors).length > 0;
  }

  return (
    <Wrapper className={classes.join(" ")}>
      <TwoColLayout
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
                <WizardStepsContainer pathname={location.pathname} />
              </LargeScreenOnly>
              {formIsInvalid() && (
                <h4 className="formInvalidMessage">
                  There are some errors in the form, please correct them before
                  submitting the form.
                </h4>
              )}

              <ContactInformation />
              <ShippingAddress />
              <BillingInfo />
              <PaymentMethods />
              <TermsAndConditions />
              <div className="CTAs">
                <div className="buttonsWrapper">
                  <Button type="button">Back</Button>
                  <Button type="submit" primary>
                    Buy Now
                  </Button>
                </div>

                {formIsInvalid() && (
                  <h4 className="formInvalidMessage">
                    Please correct the error(s) above
                  </h4>
                )}
              </div>
            </MainContent>

            <Aside>
              <SmallScreenOnly>
                <WizardStepsContainer pathname={location.pathname} />
              </SmallScreenOnly>

              <OrderSummary />
              <BenefitList />
              <FundRaisingPlatforms />
              <AsSeenOn />
              <FundedBy />
            </Aside>
          </form>
        </FormProvider>
      </TwoColLayout>
    </Wrapper>
  );
};

Component.displayName = "CheckoutPage";

export default Component;
