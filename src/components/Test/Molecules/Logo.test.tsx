import { render, screen } from "@testing-library/react";
import Logo from "../../UI/molecules/Logo";

describe("Logo Testing", () => {
  const SetUp = () => {
    const utils = render(<Logo />);
    const logo = screen.getByTestId("LogoID");
    return {
      logo,
      ...utils,
    };
  };
  test("logo rendring", () => {
    const { logo } = SetUp();
    expect(logo).toBeInTheDocument();
  });
  test("has correct style", () => {
    const { logo } = SetUp();
    expect(logo).toHaveClass(
      "w-20	h-20 m-auto	items-center flex justify-center bg-white rounded-full"
    );
  });
});
