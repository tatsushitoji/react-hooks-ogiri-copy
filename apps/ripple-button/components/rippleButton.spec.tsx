import * as React from 'react';
import { render, getByTestId, fireEvent, cleanup } from 'react-testing-library';
import RippleButton from './rippleButton';

afterEach(cleanup);

describe('ripple-button/components/rippleButton', () => {
  test('should render', () => {
    const { container } = render(
      <RippleButton
        width="180px"
        heihgt="64px"
        borderRadius="10px"
        backgroundColor="#7089b9"
        effectSize={280}
        dataTestId="button"
      >
        <span className="children">ripple</span>
      </RippleButton>,
    );
    const button = getByTestId(container, 'button');
    expect(button.textContent).toBe('ripple');
  });

  test('should click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <RippleButton
        width="180px"
        heihgt="64px"
        borderRadius="10px"
        backgroundColor="#7089b9"
        effectSize={280}
        onClick={onClick}
      >
        <span className="children">ripple</span>
      </RippleButton>,
    );
    fireEvent.click(getByText(/ripple/i));
    expect(onClick).toHaveBeenCalled();
  });
});
