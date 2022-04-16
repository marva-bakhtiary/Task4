import { render, screen } from "@testing-library/react";
import Button from "../UI/atoms/Button";
describe("Button Testing", () => {
  test("has correct text", () => {
    render(<Button content="button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("button");
  });
  test("has correct style", () => {
    render(<Button content="button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "border-none  h-14 color text-2xl	transition-all duration-300	ease rounded"
    );
  });
  test("has correct style with extra classes", () => {
    render(
      <Button
        content="button"
        buttonType="w-32 cursor-not-allowed bg-neutral-200	text-zinc-500 hover:bg-neutral-300 underline"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "border-none  h-14 color text-2xl	transition-all duration-300	ease rounded w-32 cursor-not-allowed bg-neutral-200	text-zinc-500 hover:bg-neutral-300 underline"
    );
  });
});
