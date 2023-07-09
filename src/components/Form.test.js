import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from './Form';

test('renders form properly', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameLabel = screen.getByLabelText(/First name:/i);
  const lnameLabel = screen.getByLabelText(/Last name:/i);
  const emailLabel = screen.getByLabelText(/Email:/i);
  const passwordLabel = screen.getByLabelText(/Password:/i);

  // Assertions to check if form elements are rendered
  expect(fnameLabel).toBeInTheDocument();
  expect(lnameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});


test('validates form fields against regex pattern on submit', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameInput = screen.getByLabelText(/First name:/i);
  const lnameInput = screen.getByLabelText(/Last name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText('Submit');

  // Set input values
  fireEvent.change(fnameInput, { target: { value: 'John' } });
  fireEvent.change(lnameInput, { target: { value: 'Abcd' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Password#45' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  const lastNameError = screen.queryByText('Invalid last name');
  const firstNameError = screen.queryByText('Invalid first name');
  const passwordError = screen.queryByText('Invalid password');
  const emailError = screen.queryByText('Invalid email address');

  expect(lastNameError).not.toBeInTheDocument();
  expect(firstNameError).not.toBeInTheDocument();
  expect(passwordError).not.toBeInTheDocument();
  expect(emailError).not.toBeInTheDocument();
});

test('check for errors if wrong First Name is passed', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameInput = screen.getByLabelText(/First name:/i);
  const lnameInput = screen.getByLabelText(/Last name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText('Submit');

  // Set input values
  fireEvent.change(fnameInput, { target: { value: 'john' } });
  fireEvent.change(lnameInput, { target: { value: 'Abcd' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Password#45' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  const firstNameError = screen.queryByText('Invalid first name');

  expect(firstNameError).toBeInTheDocument();
});

test('check for errors if wrong Last Name is passed', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameInput = screen.getByLabelText(/First name:/i);
  const lnameInput = screen.getByLabelText(/Last name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText('Submit');

  // Set input values
  fireEvent.change(fnameInput, { target: { value: 'John' } });
  fireEvent.change(lnameInput, { target: { value: 'abcd' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Password#45' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  const lastNameError = screen.queryByText('Invalid last name');

  expect(lastNameError).toBeInTheDocument();
});

test('check for errors if wrong email is passed', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameInput = screen.getByLabelText(/First name:/i);
  const lnameInput = screen.getByLabelText(/Last name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText('Submit');

  // Set input values
  fireEvent.change(fnameInput, { target: { value: 'John' } });
  fireEvent.change(lnameInput, { target: { value: 'Abcd' } });
  fireEvent.change(emailInput, { target: { value: 'johndoeexamplecom' } });
  fireEvent.change(passwordInput, { target: { value: 'Password#45' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  const emailError = screen.queryByText('Invalid email address');

  expect(emailError).toBeInTheDocument();
});

test('check for errors if wrong password is passed', () => {
  render(<Form />);

  // Find form elements by their labels
  const fnameInput = screen.getByLabelText(/First name:/i);
  const lnameInput = screen.getByLabelText(/Last name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText('Submit');

  // Set input values
  fireEvent.change(fnameInput, { target: { value: 'John' } });
  fireEvent.change(lnameInput, { target: { value: 'Abcd' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Password' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  const passwordError = screen.queryByText('Invalid password');

  expect(passwordError).toBeInTheDocument();
});