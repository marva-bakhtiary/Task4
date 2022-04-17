import { render, screen } from "@testing-library/react";
import Divider from "../../UI/atoms/Divider";

describe("Divider Testing", () => {
  test("divider rendering", () => {
    render(<Divider />);
    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });
  test("correct style", () => {
    render(<Divider />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveClass("pt-10	border-solid");
  });
  test("correct style with extra classes", () => {
    render(<Divider commentDivide="border-t-neutral-400 border-t-2" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveClass(
      "pt-10 border-solid border-t-neutral-400 border-t-2"
    );
  });
});
