import React from "react";
import { ThemeProvider } from "styled-components";
import CssBaseline from "themes/baseline";
import theme, { Typography } from "themes/default";
import { render as rtlRender } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

export function tlRender(ui) {
  const App = () => {
    const methods = useForm();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography />
        <FormProvider {...methods}>{ui}</FormProvider>
      </ThemeProvider>
    );
  };
  return rtlRender(<App />);
}

export function rgb2hex(rgb) {
  if (rgb.search("rgb") == -1) {
    return rgb.toUpperCase();
  } else if (rgb == "rgba(0, 0, 0, 0)") {
    return "transparent";
  } else {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2).toUpperCase();
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]).toUpperCase();
  }
}
