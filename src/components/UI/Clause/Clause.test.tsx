import { render, screen } from "@testing-library/react";
import Clause from "./Clause";
import userEvent from "@testing-library/user-event";

const testProps = {
  collapseTitle: "Свернуть",
  expandTitle: "Развернуть",
  content: "Test text",
};

describe("Clause.test.js: ", () => {
  it("После нажатия на кнопку 'Развернуть' меняется на 'Свернуть'", async () => {
    render(<Clause {...testProps} />);
    const toggleElement = screen.getByText(/развернуть/i);
    userEvent.click(toggleElement);
    expect(await screen.findByText(/свернуть/i)).toBeInTheDocument();
  });
});
