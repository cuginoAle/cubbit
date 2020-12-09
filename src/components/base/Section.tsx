import React from 'react';
import styled from 'styled-components';

interface StyledProp {
  showBorder: boolean,
  darkBG: boolean
}

const Wrapper = styled.div<StyledProp>`
  .sectionContent{
    background-color: ${({ theme, darkBG }) => darkBG ? theme.palette.grey.lighter : theme.palette.white};
    border: ${({ showBorder, theme }) => showBorder && `1px solid ${theme.palette.grey.lighter}`} ;
    border-radius:  ${({ theme }) => theme.radius}px;
  }

  .subTitle {
    line-height:1.8;
  }
`;

export type Props = {
  className?: string;
  title?: string;
  subTitle?: string;
  showBorder?: boolean;
  children?: React.ReactNode;
  darkBG?: boolean;
}

const Component: React.FC<Props> = ({ className, title, subTitle, children, showBorder = true, darkBG = false }: Props) => {

  const classes = ['Section']
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')} showBorder={showBorder} darkBG={darkBG}>
      {title && <h3>{title}</h3>}
      {subTitle && <h4 className='subTitle'>{subTitle}</h4>}

      <section className='sectionContent'>
        {children}
      </section>

    </Wrapper>
  )
}

Component.displayName = 'Section'

export default Component