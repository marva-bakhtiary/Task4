import { render, screen } from "@testing-library/react";
import Badge from "../UI/atoms/Badge";

const SetUp = () => {
  const utils = render(<Badge />);
  const badge = screen.getByText(/new/i);
  return {
    badge,
    ...utils,
  };
};
describe("Badge testing", () => {
  test("badge rendering", () => {
    const { badge } = SetUp();
    expect(badge).toBeInTheDocument();
  });
  test("renders correct style", () => {
    const { badge } = SetUp();
    expect(badge).toHaveClass("top-28 -right-2.5 py-[5px] px-5 absolute color");
  });
});
