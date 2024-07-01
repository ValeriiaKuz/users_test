import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useAppDispatch } from '../../utiles/hooks';
import { FormWithFormik } from './FormWithFormik';

vi.mock('../../utiles/hooks', () => ({
  useAppDispatch: vi.fn()
}));

describe('FormWithFormik', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    mockDispatch.mockReset();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders form fields correctly', () => {
    render(<FormWithFormik />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByText('Create user')).toBeInTheDocument();
  });

  it('should not submit form with incorrect values', async () => {
    render(<FormWithFormik />);

    const nameInput = screen.getByPlaceholderText('Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByText('Create user');

    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.change(usernameInput, { target: { value: 'a' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    fireEvent.click(submitButton);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
