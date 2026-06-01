import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects", () => {
  it("renders Projects section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /Projects/i })
    ).toBeInTheDocument();
  });
});
