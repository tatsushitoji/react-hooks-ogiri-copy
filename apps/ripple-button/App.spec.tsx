import * as React from 'react';
import { render, getByTestId, cleanup } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

describe('ripple-button/App', () => {
  test('should render', () => {
    const { container } = render(<App />);
    const button1 = getByTestId(container, 'button1');
    const button2 = getByTestId(container, 'button2');
    const button3 = getByTestId(container, 'button3');
    expect(button1.textContent).toBe('DOWNLOAD');
    expect(button2.textContent).toBe('UPLOAD');
    expect(button3.textContent).toBe('DOWNLOAD');
  });
});
