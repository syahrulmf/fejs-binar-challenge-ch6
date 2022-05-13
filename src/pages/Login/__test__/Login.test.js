import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render title", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Welcome to sign in page/);
  expect(linkElement).toBeInTheDocument();
});
