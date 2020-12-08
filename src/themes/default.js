import { createGlobalStyle } from "styled-components";

const palette = {
  primary: "#009EFF",
  white: "#fff",
  accent: "#EA243C",
  grey: {
    darker: "#161616",
    dark: "#363636",
    normal: "#98A0A6",
    light: "#B0B6BA",
    lighter: "#ECECEC",
    lightest: "#F7F7F7",
  },
};

const breakPoints = {
  small: "max-width: 680px",
  large: "min-width: 681px",
};

const mediaQuery = {
  small: `@media screen and (${breakPoints.small})`,
  large: `@media screen and (${breakPoints.large})`,
};

const textSize = {
  h1: "3.2rem",
  h2: "2.8rem",
  h3: "2.4rem",
  h4: "1.6rem",
  textBody: "1.2rem",
};

export const Typography = createGlobalStyle`  
  body {
    font-family: 'Nunito', sans-serif;
    font-size: ${textSize.textBody};
  }

  h1{
    font-size:${textSize.h1};
    margin: 0 0 ${textSize.h1};
    font-weight: 900;
  }
  h2{
    font-size:${textSize.h2};
    margin: 0 0 ${textSize.h2};
    font-weight: 900;
  }
  h3{
    font-size:${textSize.h3};
    margin: 0 0 ${textSize.h3};
    font-weight: 900;
  }
  h4{
    font-size:${textSize.h4};
    margin: 0 0 ${textSize.h4};
    font-weight: normal;
  }
`;

export default {
  palette,
  textSize,
  mediaQuery,
  breakPoints,
  spacer: 8,
  radius: 4,
  shadows: {
    primary: `0px 10px 20px ${palette.primary}1A`, // 10% transparency
    secondary: `0px 10px 20px rgba(22, 22, 22, 0.1)`,
  },
  textBody: {
    primary: palette.grey.dark,
    secondary: palette.grey.light,
  },
  button: {
    radius: 2,
  },
  validation: {
    error: palette.accent,
  },
};

// table of % to hex values for the #RRGGBBAA format

// 100% — FF
// 95% — F2
// 90% — E6
// 85% — D9
// 80% — CC
// 75% — BF
// 70% — B3
// 65% — A6
// 60% — 99
// 55% — 8C
// 50% — 80
// 45% — 73
// 40% — 66
// 35% — 59
// 30% — 4D
// 25% — 40
// 20% — 33
// 15% — 26
// 10% — 1A
// 5% — 0D
// 0% — 00
