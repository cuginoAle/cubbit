import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Forbes } from 'assets/svgs/forbes.svg';
import { ReactComponent as Wired } from 'assets/svgs/wired.svg';
import ExternalCredits, { Props as CreditsProp } from 'components/base/ExternalCredits';

const Wrapper = styled.div``;

export type Props = {
  className?: string;
}

const options: CreditsProp = {
  heading: "As seen on:",
  credits: [
    { key: "Forbes", svg: Forbes },
    { key: "Wired", svg: Wired }
  ]
}

const Component: React.FC<Props> = ({ className }: Props) => {

  const classes = ['AsSeenOn']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <ExternalCredits {...options} />
    </Wrapper>
  )
}

Component.displayName = 'AsSeenOn'

export default Component