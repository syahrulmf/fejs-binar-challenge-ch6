import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render text dashboard", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Loading/);
  expect(linkElement).toBeInTheDocument();
});
