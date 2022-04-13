import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../UI/atoms/Input";
const SetUp = () => {
  const utils = render(<Input />);
  const input = screen.getByRole("textbox");
  return {
    input,
    ...utils,
  };
};
describe("input testing", () => {
  test("input rendering", () => {
    const { input } = SetUp();
    expect(input).toBeInTheDocument();
  });

  test("has correct attributes", () => {
    const { input } = SetUp();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Search...");
  });
  test("type in input", () => {
    const { input } = SetUp();
    userEvent.type(input, "testing...");
    expect(input).toHaveValue("testing...");
  });
  test("input focus on click", () => {
    const { input } = SetUp();
    userEvent.click(input);
    expect(input).toHaveFocus();
  });
});
