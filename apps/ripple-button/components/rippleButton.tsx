import * as React from 'react';
import styled from 'styled-components';
import { useRippleEffect } from './useRippleEffect';

// ______________________________________________________
//
// @ Types

type Props = {
  width: string;
  heihgt: string;
  effectSize: number;
  effectColor?: string;
  borderRadius?: string;
  textColor?: string;
  backgroundColor?: string;
  effectDuration?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  dataTestId?: string;
};

// ______________________________________________________
//
// @ View

const View: React.FC<Props> = ({
  effectDuration,
  className,
  dataTestId,
  onClick,
  children,
}) => {
  const ref = React.useRef({} as HTMLButtonElement);
  const { handleMouseDown, handleMouseUp, effectStyle } = useRippleEffect({
    ref,
    effectDuration,
  });
  return (
    <button
      type="button"
      ref={ref}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      data-testid={dataTestId}
    >
      <span className="effect" style={effectStyle} />
      {children}
    </button>
  );
};
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: relative;
  outline: none;
  overflow: hidden;
  line-height: 0;
  width: ${props => props.width};
  height: ${props => props.heihgt};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.textColor || '#fff'};
  background-color: ${props => props.backgroundColor || '#000'};
  -webkit-tap-highlight-color: transparent;
  > .effect {
    display: block;
    position: absolute;
    pointer-events: none;
    width: ${props => `${props.effectSize * 2}px`};
    height: ${props => `${props.effectSize * 2}px`};
    left: ${props => `${props.effectSize * -1}px`};
    top: ${props => `${props.effectSize * -1}px`};
    border-radius: ${props => `${props.effectSize}px`};
    background-color: ${props => props.effectColor || '#fff'};
  }
`;
