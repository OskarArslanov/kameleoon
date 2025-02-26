import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Input } from './input';

describe('Input component', () => {
  test('renders input with correct placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders input with correct value', () => {
    render(<Input value="test value" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue(/test value/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when value changes', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});