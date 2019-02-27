import * as React from 'react';
import styled from 'styled-components';
// import Indicate from '../../components/indicate';
import { images } from '../images';
import PhotoCarousel from './photoCarousel/PhotoCarousel';

type Props = { className?: string };

const StyledHero = styled('div')`
  position: relative;
  > .indicate {
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: 0;
  }
`;

const Hero: React.FC<Props> = ({ className }) => {
  const [current, setCurrent] = React.useState(0);
  return (
    <StyledHero className={className}>
      <PhotoCarousel
        images={images}
        imageRatio={0.66}
        transitionInterval={4000}
        transitionDuration={400}
        onChangeCurrent={setCurrent}
      />
      {/* <div className="indicate">
        <Indicate current={current} color="light" count={Images.length} />
      </div> */}
    </StyledHero>
  );
};

export default Hero;
