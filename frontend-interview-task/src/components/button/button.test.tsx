import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Button } from './button';

describe('Button component', () => {
  test('renders button with correct text', () => {
    render(<Button variant="secondary">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies correct class based on variant', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let buttonElement = screen.getByText(/secondary/i);
    expect(buttonElement).toHaveClass('component');
    expect(buttonElement).toHaveClass('secondary');

    rerender(<Button variant="success">Success</Button>);
    buttonElement = screen.getByText(/success/i);
    expect(buttonElement).toHaveClass('component');
    expect(buttonElement).toHaveClass('success');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button variant="secondary" onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});