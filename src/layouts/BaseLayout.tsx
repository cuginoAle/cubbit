import React from 'react';
import styled from 'styled-components';

export const Aside = styled.div`
  padding: 0 ${({ theme }) => theme.spacer * 2}px;
  ${({ theme }) => theme.mediaQuery.large} {        
  }
`

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 0 ${({ theme }) => theme.spacer * 2}px;
  ${({ theme }) => theme.mediaQuery.large} {  
  
  }
`

const Header = styled.div`  
  flex-shrink: 0;
  >.headerWrapper{
    background-color: ${({ theme }) => theme.palette.white};
    padding: ${({ theme }) => theme.spacer * 4}px 0;
  }
  ${({ theme }) => theme.mediaQuery.large} {  
    max-width:50%;
  
  }
`

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:1;  

  ${Aside}{
    order:0;    
    >*{
        margin: 0 auto ${({ theme }) => theme.spacer * 3}px;
      }
  }
  ${MainContent}{
    order:1;
  }
  
  ${({ theme }) => theme.mediaQuery.large} {  
    justify-content: center;
    flex-direction: row;
    ${Aside}{
      order:1;
      flex-basis: 50%;
      >*{
        max-width: 400px;
        margin: 0 auto ${({ theme }) => theme.spacer * 3}px;
      }
    }
    ${MainContent}{
      order:0;
      flex-basis: 50%;
    }
  }

`

const Wrapper = styled.div`  
  height: 1px;
  min-height: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  ${({ theme }) => theme.mediaQuery.large} {  
    background-color: ${({ theme }) => theme.palette.grey.lightest};
  }
`;


export interface Props {
  className?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
}

const Component: React.FC = ({ className, children, header }: Props) => {

  const classes = ['BaseLayout']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      {header && <Header>
        <div className="headerWrapper">
          {header}
        </div>
      </Header>}
      <MainContentWrapper>
        {children}
      </MainContentWrapper>
    </Wrapper>
  )
}

Component.displayName = 'BaseLayout'

export default Component