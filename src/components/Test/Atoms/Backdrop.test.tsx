import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Backdrop from "../../UI/atoms/Backdrop";

describe("Backdrop testing", () => {
  let isShow = true;
  let isHide = false;
  test("show backdrop", () => {
    render(<Backdrop show={isShow} hide={() => !isShow} />);
    const backdrop = screen.getByTestId("backdropID");
    expect(backdrop).toBeInTheDocument();
  });
  test("hide backdrop", () => {
    render(<Backdrop show={isHide} hide={() => !isHide} />);
    const backdrop = screen.queryByTestId("backdropID");
    expect(backdrop).not.toBeInTheDocument();
  });
  xtest("click to disappear", () => {
    render(
      <Backdrop
        show={isShow}
        hide={() => {
          isShow = false;
        }}
      />
    );
    const backdrop = screen.getByTestId("backdropID");
    fireEvent.click(backdrop);
    expect(backdrop).not.toBeInTheDocument();
  });
});
