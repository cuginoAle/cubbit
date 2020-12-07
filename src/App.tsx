import React from 'react';
import styled from 'styled-components';
import CheckoutPageContainer from 'components/Pages/CheckoutPageContainer';

const Wrapper = styled.div`
  color:${({ theme }) => theme.textBody.primary};
  height: 1px;
  min-height: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <CheckoutPageContainer />
    </Wrapper>
  );
}

export default App;
