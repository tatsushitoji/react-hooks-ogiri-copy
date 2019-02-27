import * as React from 'react';
import { Image } from '../../images';
import { usePhotoCarousel, Options } from './usePhotoCarousel';
import Item from './Item';

type Props = {
  images: Image[];
  onChangeCurrent?: (current: number) => void;
  className?: string;
  dataTestId?: string;
} & Partial<Options>;

const PhotoCarousel: React.FC<Props> = ({
  images,
  imageRatio,
  transitionInterval,
  transitionDuration,
  onChangeCurrent,
  className,
  dataTestId,
}) => {
  const ref = React.useRef({} as HTMLDivElement);
  const { itemWidth, itemHeight, nodeStyle, containerStyle } = usePhotoCarousel(
    {
      ref,
      imagesCount: images.length,
      imageRatio,
      transitionInterval,
      transitionDuration,
      onChangeCurrent,
    },
  );
  return (
    <div className={className} style={nodeStyle} ref={ref}>
      <div style={containerStyle} data-testid={dataTestId}>
        {images.map((image, index) => (
          <Item
            key={image.id}
            index={index}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            path={image.path}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
