import * as React from 'react';
import { useToggleSwitch } from './useToggleSwitch';

type Props = {
  width?: number;
  height?: number;
  inactiveColor?: string;
  activeColor?: string;
  defaultChecked?: boolean;
  onChangeChecked?: (checked: boolean) => void;
  className?: string;
  dataTestId?: string;
};

const ToggleSwitch = ({
  width,
  height,
  inactiveColor,
  activeColor,
  defaultChecked,
  onChangeChecked,
  className,
  dataTestId,
}: Props) => {
  const {
    state,
    nodeStyle,
    baseStyle,
    knobStyle,
    inputStyle,
    handleToggle,
  } = useToggleSwitch({
    width,
    height,
    checked: defaultChecked,
    inactiveColor,
    activeColor,
    onChangeChecked,
  });
  return (
    <div className={className} style={nodeStyle}>
      <span className="base" style={baseStyle} />
      <span className="knob" style={knobStyle} />
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={state.checked}
        style={inputStyle}
        data-testid={dataTestId}
      />
    </div>
  );
};

export default ToggleSwitch;
