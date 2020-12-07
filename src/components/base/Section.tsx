import React from 'react';
import styled from 'styled-components';

interface StyledProp {
  showBorder?: boolean
}

const Wrapper = styled.div<StyledProp>`
  margin-bottom:${({ theme }) => theme.spacer * 3}px;
  .sectionContent{
    background-color: ${({ theme }) => theme.palette.white};
    border: ${({ showBorder, theme }) => showBorder && `1px solid ${theme.palette.grey.lighter}`} ;
    border-radius:  ${({ theme }) => theme.radius}px;
  }
`;

export type Props = {
  className?: string;
  title?: string;
  subTitle?: string;
  showBorder?: boolean;
  children?: React.ReactNode;
}

const Component: React.FC = ({ className, title, subTitle, children, showBorder }: Props) => {

  const classes = ['Section']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')} showBorder={showBorder}>
      {title && <h3>{title}</h3>}
      {subTitle && <h4>{subTitle}</h4>}

      <section className='sectionContent'>
        {children}
      </section>

    </Wrapper>
  )
}

Component.displayName = 'Section'

export default Component