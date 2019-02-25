// import * as React from 'react';
import { testHook, act, cleanup } from 'react-testing-library';
import { useToggleSwitch } from './useToggleSwitch';

afterEach(cleanup);

describe('toggle-switch/components/useToggleSwitch', () => {
  test('accepts default initial state', () => {
    let state;
    testHook(() => ({ state } = useToggleSwitch({ checked: false })));
    expect(state).toEqual({
      checked: false,
    });
    testHook(() => ({ state } = useToggleSwitch({ checked: true })));
    expect(state).toEqual({
      checked: true,
    });
  });

  test('accepts default initial nodeStyle', () => {
    let nodeStyle;
    testHook(
      () =>
        ({ nodeStyle } = useToggleSwitch({
          checked: false,
        })),
    );
    expect(nodeStyle).toEqual({
      display: 'inline-block',
      position: 'relative',
      width: '50px',
      height: '30px',
    });
    testHook(
      () =>
        ({ nodeStyle } = useToggleSwitch({
          width: 100,
          height: 60,
        })),
    );
    expect(nodeStyle).toEqual({
      display: 'inline-block',
      position: 'relative',
      width: '100px',
      height: '60px',
    });
  });

  test('accepts default initial baseStyle', () => {
    let baseStyle;
    testHook(
      () =>
        ({ baseStyle } = useToggleSwitch({
          checked: false,
        })),
    );
    expect(baseStyle).toEqual({
      display: ' block',
      width: '100%',
      transitionDuration: '0.2s',
      height: '30px',
      borderRadius: '30px',
      backgroundColor: '#eee',
    });
    testHook(
      () =>
        ({ baseStyle } = useToggleSwitch({
          width: 100,
          height: 60,
          checked: true,
        })),
    );
    expect(baseStyle).toEqual({
      display: ' block',
      width: '100%',
      transitionDuration: '0.2s',
      height: '60px',
      borderRadius: '60px',
      backgroundColor: '#4ed164',
    });
  });

  test('accepts default initial knobStyle', () => {
    let knobStyle;
    testHook(
      () =>
        ({ knobStyle } = useToggleSwitch({
          checked: false,
        })),
    );
    expect(knobStyle).toEqual({
      display: 'block',
      width: '26px',
      height: '26px',
      borderRadius: '30px',
      position: 'absolute',
      top: '2px',
      left: '2px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      transitionDuration: '0.2s',
    });
    testHook(
      () =>
        ({ knobStyle } = useToggleSwitch({
          width: 100,
          height: 60,
          checked: true,
        })),
    );
    expect(knobStyle).toEqual({
      display: 'block',
      width: '56px',
      height: '56px',
      borderRadius: '60px',
      position: 'absolute',
      top: '2px',
      left: '42px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      transitionDuration: '0.2s',
    });
  });

  test('accepts default initial inputStyle', () => {
    let inputStyle;
    const defaultInputStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: 0,
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
    };
    testHook(
      () =>
        ({ inputStyle } = useToggleSwitch({
          checked: false,
        })),
    );
    expect(inputStyle).toEqual(defaultInputStyle);
    testHook(
      () =>
        ({ inputStyle } = useToggleSwitch({
          width: 100,
          height: 60,
          checked: true,
        })),
    );
    expect(inputStyle).toEqual(defaultInputStyle);
  });

  test('provides an `handleToggle` function', () => {
    let handleToggle: any; // TODO: more strict
    let state;
    const event = {
      target: {
        checked: true,
      },
      persist: jest.fn(),
    } as any; // TODO: more strict
    testHook(
      () =>
        ({ state, handleToggle } = useToggleSwitch({
          checked: false,
        })),
    );
    expect(state).toEqual({
      checked: false,
    });
    act(() => {
      handleToggle(event);
    });
    expect(state).toEqual({
      checked: true,
    });
  });
});
