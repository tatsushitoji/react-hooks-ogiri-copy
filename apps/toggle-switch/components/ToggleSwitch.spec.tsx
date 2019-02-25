import * as React from 'react';
import { render, fireEvent, getByTestId, cleanup } from 'react-testing-library';
import ToggleSwitch from './ToggleSwitch';

afterEach(cleanup);

describe('toggle-switch/components/ToggleSwitch', () => {
  test('should render', () => {
    const { container } = render(<ToggleSwitch dataTestId="toggleSwitch" />);
    const toggleSwitch = getByTestId(container, 'toggleSwitch');
    expect(toggleSwitch).toHaveProperty('checked', false);
  });

  test('should change', () => {
    // const onChange = jest.fn();
    const { container } = render(<ToggleSwitch dataTestId="toggleSwitch" />);
    const toggleSwitch = getByTestId(container, 'toggleSwitch');
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toHaveProperty('checked', true);
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toHaveProperty('checked', false);
  });
});
