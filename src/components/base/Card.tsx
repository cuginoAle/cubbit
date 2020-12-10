import React from "react";
import styled from "styled-components";

interface StyledProp {
  noBorder?: boolean;
  darkBG?: boolean;
  chidren?: React.ReactNode;
}

export default styled.div<StyledProp>`
  background-color: ${({ theme, darkBG }) =>
    darkBG ? theme.palette.grey.lighter : theme.palette.white};
  border: ${({ noBorder, theme }) =>
    !noBorder && `1px solid ${theme.palette.grey.lighter}`};
  border-radius: ${({ theme }) => theme.radius}px;
`;
