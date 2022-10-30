import { render, screen } from "@testing-library/react"
import App from "./App";

describe("App", () => {
   
  it("Should render card deck", () => {
    render(<App />);

    expect(screen.getByTestId("card-deck")).toBeInTheDocument();
  });

});
