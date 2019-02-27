import * as React from 'react';
import { render, getByTestId, cleanup } from 'react-testing-library';
import { images } from '../../images';
import PhotoCarousel from './PhotoCarousel';

afterEach(cleanup);

describe('photo-carousel/components/PhotoCarousel', () => {
  test('should render', async () => {
    const callback = jest.fn();
    const { container } = render(
      <PhotoCarousel
        images={images}
        imageRatio={0.66}
        transitionInterval={500}
        transitionDuration={100}
        onChangeCurrent={callback}
        dataTestId="imagesContainer"
      />,
    );
    const imagesContainer = getByTestId(container, 'imagesContainer');
    // @ts-ignore refs https://github.com/gnapse/jest-dom/pull/11#issuecomment-387817459
    expect(imagesContainer).toHaveStyle(`
      width: 500%;
      height: 0px;
      position: absolute;
      top: 0;
      left: 0;
      transition-duration: 0.1s;
    `);
    expect(imagesContainer.childElementCount).toEqual(5);
  });
});
