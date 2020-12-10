import { screen } from "@testing-library/react";
import { tlRender, rgb2hex } from "helpers/testUtils";
import theme from "themes/default";

import InputField from "./InputField";

describe("InputField", () => {
  test("renders correctly", () => {
    tlRender(<InputField name="username" label="user_name" type="text" />);

    const element = screen.getByText("user_name");
    expect(element).toBeInTheDocument();

    const inputEl = screen.getByLabelText("user_name");
    const rootEl = inputEl.parentNode;

    expect(inputEl).toHaveAttribute("name", "username");
    expect(inputEl).toHaveAttribute("type", "text");
    expect(rootEl).not.toHaveClass("validationError");
  });

  test("renders validation error", async () => {
    tlRender(
      <InputField
        name="user_name"
        label="User_name"
        validationError={"mandatory"}
      />
    );
    const inputEl = screen.getByLabelText(/User_name/i);
    const rootEl = inputEl.parentNode;

    const borderColor = rgb2hex(getComputedStyle(inputEl).borderColor);
    const expectedColor = theme.palette.accent;

    expect(borderColor).toBe(expectedColor);
    expect(rootEl).toHaveClass("validationError");
  });
});
