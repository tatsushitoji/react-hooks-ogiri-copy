import * as React from 'react';
import { render, getByTestId, cleanup } from 'react-testing-library';
import Item from './Item';

afterEach(cleanup);

describe('photo-carousel/components/Item', () => {
  test('should render', async () => {
    const { container } = render(
      <Item
        index={3}
        itemWidth={400}
        itemHeight={300}
        path="https://placehold.jp/09d4d6/666666/640x426.png"
        dataTestId="imageItem"
      />,
    );
    const imageItem = getByTestId(container, 'imageItem');
    // @ts-ignore refs https://github.com/gnapse/jest-dom/pull/11#issuecomment-387817459
    expect(imageItem).toHaveStyle(`
      width: 400px;
      height: 300px;
      position: absolute;
      top: 0;
      left: 1200px;
      background-size: cover;
      background-image: url(https://placehold.jp/09d4d6/666666/640x426.png);
      background-position: 'center';
    `);
  });
});
