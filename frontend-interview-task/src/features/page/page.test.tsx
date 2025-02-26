import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Page } from "./page";

describe("Page component", () => {
 test("renders the children correctly", () => {
  render(
   <Page title="Test Title">
    <div>Test Content</div>
   </Page>
  );
  const contentElement = screen.getByText(/test content/i);
  expect(contentElement).toBeInTheDocument();
 });

 test("renders the back button correctly", () => {
  render(
   <Page title="Test Title" withBackButton>
    Content
   </Page>
  );
  const backButtonElement = screen.getByText(/Back/i);
  expect(backButtonElement).toBeInTheDocument();
  expect(backButtonElement).toHaveTextContent(/Back/i);
  expect(backButtonElement).toHaveClass("back");
 });
});
