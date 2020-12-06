import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import CssBaseline from "../src/themes/baseline";
import { ThemeProvider } from "styled-components";
import theme, { Typography } from "../src/themes/default";

addDecorator((storyFn) => (
  <>
    <CssBaseline />
    <Typography />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
));

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
