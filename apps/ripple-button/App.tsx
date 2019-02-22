import * as React from 'react';
import styled from 'styled-components';
import RippleButton from './components/rippleButton';

// TODO: enable SVG bundle / jest
// import SVGInline from 'react-svg-inline';
// import Icon from '-!svg-react-loader!./assets/down1.svg'; // eslint-disable-line
// const down2 = require('./assets/down2.svg');
// const up1 = require('./assets/up1.svg');

// ______________________________________________________
//
// @ Types

type Props = { className?: string };

// ______________________________________________________
//
// @ View

const View: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <RippleButton
      width="180px"
      heihgt="64px"
      borderRadius="10px"
      backgroundColor="#7089b9"
      effectSize={280}
      dataTestId="button1"
    >
      <span className="children">DOWNLOAD</span>
    </RippleButton>
    <RippleButton
      width="160px"
      heihgt="64px"
      borderRadius="5px"
      backgroundColor="#009fff"
      effectSize={160}
      dataTestId="button2"
    >
      <span className="children">UPLOAD</span>
    </RippleButton>
    <RippleButton
      width="170px"
      heihgt="64px"
      borderRadius="37px"
      backgroundColor="#00d9ff"
      effectSize={320}
      dataTestId="button3"
    >
      <span className="children">DOWNLOAD</span>
    </RippleButton>
  </div>
);
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  > * {
    margin: 10px;
    > .children {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > * {
        margin-right: 10px;
      }
    }
  }
`;
