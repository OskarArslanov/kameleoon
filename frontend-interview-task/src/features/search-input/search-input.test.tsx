import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./search-input";
import '@testing-library/jest-dom'

describe("SearchInput component", () => {
 test("renders input with correct placeholder", () => {
  render(<SearchInput value="" onChange={() => {}} placeholder="Search..." />);
  const inputElement = screen.getByPlaceholderText(/search.../i);
  expect(inputElement).toBeInTheDocument();
 });

 test("renders input with correct value", () => {
  render(<SearchInput value="test value" onChange={() => {}} />);
  const inputElement = screen.getByDisplayValue(/test value/i);
  expect(inputElement).toBeInTheDocument();
 });

 test("calls onChange handler when value changes", () => {
  const handleChange = jest.fn();
  render(<SearchInput value="" onChange={handleChange} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "new value" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
 });
});
