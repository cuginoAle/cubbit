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

const Wrapper = styled.div`
  min-height: 100%;
  height: 1px;

  ${Aside}{
    >*{
      margin-bottom:${({ theme }) => theme.spacer * 4}px;
    }
  }
`;

export type Props = {
  className?: string;
  children?: ReactNode;
}

const Component: React.FC = ({ className }: Props) => {

  const classes = ['CheckoutPage']
  if (className) classes.push(className);


  return (
    <Wrapper className={classes.join(' ')}>

      <BaseLayout {...{
        header: <Header />
      }}>
        <MainContent>
          <LargeScreenOnly>
            <WizardStepsContainer />
          </LargeScreenOnly>
          Some Main content here!
        </MainContent>

        <Aside>
          <SmallScreenOnly>
            <WizardStepsContainer />
          </SmallScreenOnly>
          <BenefitList />
          <FundRaising />
          <AsSeenOn />
          <FundedBy />

        </Aside>
      </BaseLayout>
    </Wrapper>
  )
}

Component.displayName = 'CheckoutPage'

export default Component