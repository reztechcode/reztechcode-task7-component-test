
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/Contact';

describe('Contact Component', () => {
  test('renders the Contact form correctly', () => {
    render(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('allows user to type into the form fields', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const subjectInput = screen.getByLabelText(/subject/i) as HTMLInputElement;
    const messageTextarea = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Testing Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'This is a test message.' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(subjectInput.value).toBe('Testing Subject');
    expect(messageTextarea.value).toBe('This is a test message.');
  });

  test('displays success message on form submission', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageTextarea = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Testing Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'This is a test message.' } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/your message has been sent successfully/i)).toBeInTheDocument();

    // Ensure the form fields are cleared after submission
    expect((nameInput as HTMLInputElement).value).toBe('');
    expect((emailInput as HTMLInputElement).value).toBe('');
    expect((subjectInput as HTMLInputElement).value).toBe('');
    expect((messageTextarea as HTMLTextAreaElement).value).toBe('');
  });
});
