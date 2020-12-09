import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import CheckoutPageContainer from "components/Pages/CheckoutPageContainer";
import ThankYouPageContainer from "components/Pages/ThankYouPageContainer";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.textBody.primary};
  height: 1px;
  min-height: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CheckoutPageContainer} />
          <Route exact path="/thankyou" component={ThankYouPageContainer} />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
