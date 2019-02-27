import { testHook, cleanup, act } from 'react-testing-library';
import { usePhotoCarousel, Options } from './usePhotoCarousel';

afterEach(cleanup);
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('photo-carousel/components/usePhotoCarousel', () => {
  test('accepts default initial state', async () => {
    const defaultOpts: Options = {
      imagesCount: 5,
      imageRatio: 0.66,
      transitionInterval: 1000,
      transitionDuration: 400,
      onChangeCurrent: null,
    };
    let current;
    let itemWidth;
    let itemHeight;
    let nodeStyle;
    let containerStyle;
    testHook(
      () =>
        ({
          current,
          itemWidth,
          itemHeight,
          nodeStyle,
          containerStyle,
        } = usePhotoCarousel({
          ref: {
            current: {
              getBoundingClientRect: () => ({
                width: 300,
                height: 400,
              }),
            } as any, // TODO: more strict
          },
          ...defaultOpts,
        })),
    );
    expect(current).toEqual(0);
    expect(itemWidth).toEqual(300);
    expect(itemHeight).toEqual(400);
    expect(nodeStyle).toEqual({
      width: '100%',
      paddingTop: '66%',
      overflow: 'hidden',
      position: 'relative',
    });
    expect(containerStyle).toEqual({
      width: '500%',
      height: '400px',
      position: 'absolute',
      top: 0,
      left: '0px',
      transitionDuration: '0.4s',
    });
    // 時は動き出す スタープラチナ
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(current).toEqual(2);
    expect(containerStyle).toEqual({
      width: '500%',
      height: '400px',
      position: 'absolute',
      top: 0,
      left: '-600px',
      transitionDuration: '0.4s',
    });
  });
});
