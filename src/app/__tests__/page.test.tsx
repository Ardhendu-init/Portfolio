import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home page", () => {
  it("renders name heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Ardhendu Pramanik/i })
    ).toBeInTheDocument();
  });
});
