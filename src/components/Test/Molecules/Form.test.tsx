import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../../UI/molecules/Form";

describe("Form Testing", () => {
  let value = "";

  test("form rendering", () => {
    render(<Form />);
    const form = screen.getByTestId("formID");
    expect(form).toBeInTheDocument();
  });
  test("has correct style", () => {
    render(<Form />);
    const form = screen.getByTestId("formID");
    expect(form).toHaveClass("flex justify-end items-center media");
  });
  xtest("onChange value", () => {
    render(
      <Form
        Value={value}
        change={(e: string) => {
          value = e;
        }}
      />
    );
    const form = screen.getByTestId("formID");

    fireEvent.change(form, {
      target: { value: "a" },
    });
    expect(value).toBe("a");
  });
});
