import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import CssBaseline from "../src/themes/baseline";
import { ThemeProvider } from "styled-components";
import theme, { Typography } from "../src/themes/default";
import { useForm, FormProvider } from "react-hook-form";

addDecorator((storyFn) => {
  const methods = useForm();
  return (
    <>
      <CssBaseline />
      <Typography />
      <ThemeProvider theme={theme}>
        <FormProvider {...methods}>{storyFn()}</FormProvider>
      </ThemeProvider>
    </>
  );
});

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
