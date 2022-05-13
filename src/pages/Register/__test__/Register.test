import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../Register";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render title", () => {
  render(<Register />);
  const linkElement = screen.getByText(/Create New Account/);
  expect(linkElement).toBeInTheDocument();
});
