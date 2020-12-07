import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacer * 2}px;
  .heading {
    font-weight: 900;
    color: ${({ theme }) => theme.palette.grey.light};
    line-height: 1.3;
  }
  .creditList{
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    >li{
      margin-bottom: ${({ theme }) => theme.spacer * 3}px;
      flex-basis: 50%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export type Props = {
  className?: string;
  children?: React.ReactNode;
  credits?: Credit[];
  heading?: string;
}

export type Credit = {
  key: string;
  svg: React.FC;
}

const Component: React.FC = ({ className, credits = [], heading }: Props) => {

  const classes = ['ExternalCredits']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <h4 className='heading'>{heading}</h4>
      <ul className='creditList'>
        {credits.map(c => {
          const Svg = c.svg
          return (
            <li key={c.key}><Svg /></li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

Component.displayName = 'ExternalCredits'

export default Component