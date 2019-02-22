import * as React from 'react';
import { testHook, act, cleanup } from 'react-testing-library';
import { useRippleEffect } from './useRippleEffect';

afterEach(cleanup);

describe('ripple-button/components/useRippleEffect', () => {
  test('accepts default initial values', () => {
    let ref: React.RefObject<HTMLElement>;
    let effectStyle;
    testHook(
      () => ({ effectStyle } = useRippleEffect({ ref, effectDuration: 2000 })),
    );
    expect(effectStyle).toEqual({
      opacity: 0,
      transform: 'translateX(0px) translateY(0px) scale(1)',
      transitionDuration: '0s',
    });
  });

  test('provides an `handleMouseDown` function', () => {
    const ref: React.RefObject<HTMLElement> = {
      current: {
        getBoundingClientRect: () => ({
          left: 0,
          top: 0,
        }),
      } as any, // TODO: more strict
    };
    let effectStyle;
    let handleMouseDown: any; // TODO: more strict
    const event = {
      pageX: 0,
      pageY: 0,
      persist: jest.fn(),
    } as any;
    testHook(
      () =>
        ({ effectStyle, handleMouseDown } = useRippleEffect({
          ref,
          effectDuration: 2000,
        })),
    );
    expect(effectStyle).toEqual({
      opacity: 0,
      transform: 'translateX(0px) translateY(0px) scale(1)',
      transitionDuration: '0s',
    });
    act(() => {
      handleMouseDown(event);
    });
    expect(effectStyle).toEqual({
      opacity: 0.5,
      transform: 'translateX(0px) translateY(0px) scale(0)',
      transitionDuration: '0s',
    });
  });

  test('provides an `handleMouseUp` function', () => {
    const ref: React.RefObject<HTMLElement> = {
      current: {
        getBoundingClientRect: () => ({
          left: 0,
          top: 0,
        }),
      } as any, // TODO: more strict
    };
    let effectStyle;
    let handleMouseUp: any; // TODO: more strict
    const event = {
      pageX: 0,
      pageY: 0,
      persist: jest.fn(),
    } as any;
    testHook(
      () =>
        ({ effectStyle, handleMouseUp } = useRippleEffect({
          ref,
          effectDuration: 2000,
        })),
    );
    expect(effectStyle).toEqual({
      opacity: 0,
      transform: 'translateX(0px) translateY(0px) scale(1)',
      transitionDuration: '0s',
    });
    act(() => {
      handleMouseUp(event);
    });
    expect(effectStyle).toEqual({
      opacity: 0,
      transform: 'translateX(0px) translateY(0px) scale(1)',
      transitionDuration: '2s',
    });
  });
});
