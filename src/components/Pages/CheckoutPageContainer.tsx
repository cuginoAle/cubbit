import React, { ReactNode } from 'react';
import styled from 'styled-components';
import BaseLayout, { MainContent, Aside } from 'layouts/BaseLayout';
import Header from 'components/widgets/Header';
import WizardStepsContainer from 'components/containers/WizardStepsContainer';
import { SmallScreenOnly, LargeScreenOnly } from 'helpers/responsive'

const Wrapper = styled.div`
  min-height: 100%;
  height: 1px;
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
          Some other content
        </Aside>
      </BaseLayout>
    </Wrapper>
  )
}

Component.displayName = 'CheckoutPage'

export default Component