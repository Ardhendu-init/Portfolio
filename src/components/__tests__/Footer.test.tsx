import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders current year and name", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText((content) => content.includes("Ardhendu"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(year))
    ).toBeInTheDocument();
  });
});
