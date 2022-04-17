import { render, screen } from "@testing-library/react";
import Icon from "../../UI/atoms/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

describe("Icon Testing", () => {
  test("icon rendering", () => {
    render(<Icon iconShape={faSearch} />);
    const icon = screen.getByTestId("iconID");
    expect(icon).toBeInTheDocument();
  });
});
