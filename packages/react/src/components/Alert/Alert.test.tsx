import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  test('renders with title and message', () => {
    render(<Alert variant="info" title="Note">This is an alert.</Alert>);
    expect(screen.getByText(/note/i)).toBeInTheDocument();
    expect(screen.getByText(/this is an alert/i)).toBeInTheDocument();
  });

  test('renders with correct variant class', () => {
    render(<Alert variant="error" title="Error">Oops</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toMatch(/error/);
  });

  test('has aria-live polite', () => {
    render(<Alert variant="info" title="Info">Message</Alert>);
    expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
  });

  test('can be dismissed', () => {
    const onDismiss = vi.fn();
    render(<Alert variant="info" title="Info" dismissible onDismiss={onDismiss}>Close me</Alert>);
    fireEvent.click(screen.getByLabelText(/dismiss alert/i));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  test('does not render dismiss button when not dismissible', () => {
    render(<Alert variant="info" title="Info">Message</Alert>);
    expect(screen.queryByLabelText(/dismiss alert/i)).not.toBeInTheDocument();
  });
});