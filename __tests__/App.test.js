import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjetoFirebase from '../src/firebase/proj-firebase';

test('render input de email', () => {
  render(<ProjetoFirebase />);

  expect(screen.getByPlaceholderText(/Digite seu email/)).toBeInTheDocument();
})
