import * as React from 'react';
import { render, getByTestId, cleanup } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

describe('toggle-button/App', () => {
  test('should render', () => {
    const { container } = render(<App />);
    const toggle1 = getByTestId(container, '1');
    const toggle2 = getByTestId(container, '2');
    const toggle3 = getByTestId(container, '3');
    const toggle4 = getByTestId(container, '4');
    const toggle5 = getByTestId(container, '5');
    expect(toggle1.textContent).toBe('Config 1');
    expect(toggle2.textContent).toBe('Config 2');
    expect(toggle3.textContent).toBe('Config 3');
    expect(toggle4.textContent).toBe('Config 4');
    expect(toggle5.textContent).toBe('Config 5');
  });
});
