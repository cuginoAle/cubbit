import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Kickstarter } from 'assets/svgs/kickstarter.svg';
import { ReactComponent as Indiegogo } from 'assets/svgs/indiegogo.svg';
import ExternalCredits, { Props as CreditsProp } from 'components/base/ExternalCredits';

const Wrapper = styled.div``;

export type Props = {
  className?: string;
}

const options: CreditsProp = {
  heading: "More than $1 Million raised by 3000+ backers on:",
  credits: [
    { key: "Kickstarter", svg: Kickstarter },
    { key: "Indiegogo", svg: Indiegogo }
  ]
}

const Component: React.FC<Props> = ({ className }: Props) => {

  const classes = ['FundRaisingPlatforms']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <ExternalCredits {...options} />
    </Wrapper>
  )
}

Component.displayName = 'FundRaisingPlatforms'

export default Component