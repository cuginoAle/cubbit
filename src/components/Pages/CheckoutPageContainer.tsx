import React, { ReactNode } from 'react';
import styled from 'styled-components';
import BaseLayout, { MainContent, Aside } from 'layouts/BaseLayout';
import Header from 'components/widgets/Header';
import WizardStepsContainer from 'components/containers/WizardStepsContainer';
import { SmallScreenOnly, LargeScreenOnly } from 'helpers/responsive'
import AsSeenOn from 'components/widgets/AsSeenOn';
import FundRaising from 'components/widgets/FundRaising';
import FundedBy from 'components/widgets/FundedBy';
import BenefitList from 'components/widgets/BenefitList';
import OrderSummary from 'components/widgets/OrderSummary';
import ContactInformation from 'components/widgets/ContactInformation';
import ShippingAddress from 'components/widgets/ShippingAddress';
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  min-height: 100%;
  height: 1px;

  ${Aside}{
    >*{
      margin-bottom:${({ theme }) => theme.spacer * 4}px;
    }
  }
  #orderForm {
    display: contents;
  }
`;

export type Props = {
  className?: string;
  children?: ReactNode;
}

const Component: React.FC = ({ className }: Props) => {

  const classes = ['CheckoutPage']
  if (className) classes.push(className);

  const { register, handleSubmit, watch, errors } = useForm();


  return (
    <Wrapper className={classes.join(' ')}>

      <BaseLayout {...{
        header: <Header />
      }}>
        <form id="orderForm">
          <MainContent>
            <LargeScreenOnly>
              <WizardStepsContainer />
            </LargeScreenOnly>
            <ContactInformation />
            <ShippingAddress />
          </MainContent>

          <Aside>
            <SmallScreenOnly>
              <WizardStepsContainer />
            </SmallScreenOnly>
            <OrderSummary />
            <BenefitList />
            <FundRaising />
            <AsSeenOn />
            <FundedBy />

          </Aside>
        </form>
      </BaseLayout>
    </Wrapper>
  )
}

Component.displayName = 'CheckoutPage'

export default Component