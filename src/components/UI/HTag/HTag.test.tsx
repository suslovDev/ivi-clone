import { render, screen } from "@testing-library/react";
import HTag from "./HTag";

describe("HTag.tsx: ", () => {
  beforeEach(() => render(<HTag tag='h1'>Heading h1</HTag>));
  it("вложенный текст становится заголовком", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("вложенный текст выводится корректно", () => {
    expect(screen.getByText(/heading h1/i));
  });
});
