import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('renders with a label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  test('shows hint text when provided', () => {
    render(<Input label="Email" hint="We will never share your email." />);
    expect(screen.getByText(/we will never share your email/i)).toBeInTheDocument();
  });

  test('shows error message and marks input as invalid', () => {
    render(<Input label="Email" error="Required" />);
    const input = screen.getByLabelText(/email/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  test('does not show hint when there is an error', () => {
    render(<Input label="Email" hint="Hint" error="Error" />);
    expect(screen.queryByText(/hint/i)).not.toBeInTheDocument();
  });

  test('can be disabled', () => {
    render(<Input label="Email" disabled />);
    expect(screen.getByLabelText(/email/i)).toBeDisabled();
  });
});