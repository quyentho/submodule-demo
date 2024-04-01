import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";



describe("Foo", () => {
  it("Should render succesfully", () => {
    render(<App />);
  })
});