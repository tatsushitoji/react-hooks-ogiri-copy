import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

describe('ripple-button/App', () => {
  test('should render', () => {
    const { container } = render(<App />);

    expect(container.textContent).toEqual('rippleButton');
  });
});
