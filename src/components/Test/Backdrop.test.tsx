import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Backdrop from "../UI/atoms/Backdrop";

describe("Backdrop testing", () => {
  test("show backdrop", () => {
    render(<Backdrop show={true} hide={() => alert("Change State")} />);
    const backdrop = screen.getByTestId("backdropID");
    expect(backdrop).toBeInTheDocument();
  });
  test("hide backdrop", () => {
    render(<Backdrop show={false} hide={() => alert("Change State")} />);
    const backdrop = screen.queryByTestId("backdropID");
    expect(backdrop).not.toBeInTheDocument();
  });
});
