import * as React from 'react';

type Props = {
  index: number;
  itemWidth: number;
  itemHeight: number;
  path: string;
  dataTestId: string;
};

const Item: React.FC<Props> = props => {
  const style = React.useMemo(
    () => ({
      width: `${props.itemWidth}px`,
      height: `${props.itemHeight}px`,
      position: 'absolute' as 'absolute',
      top: 0,
      left: `${props.itemWidth * props.index}px`,
      backgroundSize: 'cover',
      backgroundImage: `url(${props.path})`,
      backgroundPosition: 'center',
    }),
    [props.itemWidth, props.itemHeight],
  );
  return React.useMemo(
    () => <p style={style} data-testid={props.dataTestId} />,
    [style],
  );
};

export default Item;
