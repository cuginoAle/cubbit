import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color:${({ theme }) => theme.textBody.primary};
`;

const App: React.FC = () => {
  return (
    <Wrapper className="App">

    </Wrapper>
  );
}

export default App;
