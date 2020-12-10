import { screen, fireEvent } from "@testing-library/react";
import { tlRender, rgb2hex } from "helpers/testUtils";
import theme from "themes/default";

import Button from "./Button";

describe("Button", () => {
  test("renders correctly", () => {
    tlRender(<Button>myButton</Button>);
    const element = screen.getByText(/myButton/i);
    expect(element).toBeInTheDocument();
  });

  test("renders primary style correctly", () => {
    tlRender(<Button primary={true}>myButton</Button>);
    const element = screen.getByText(/myButton/i);

    const bgColor = rgb2hex(getComputedStyle(element).backgroundColor);
    expect(bgColor).toBe(theme.palette.primary);
  });

  test("renders secondary style correctly", () => {
    tlRender(<Button>myButton</Button>);
    const element = screen.getByText(/myButton/i);

    const bgColor = rgb2hex(getComputedStyle(element).backgroundColor);
    expect(bgColor).toBe(theme.palette.white);
  });

  test("Handles click event", () => {
    const onClick = jest.fn();

    tlRender(<Button onClick={onClick}>myButton</Button>);
    const element = screen.getByText(/myButton/i);
    fireEvent.click(element);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
