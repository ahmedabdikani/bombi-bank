import Color from 'color';
import React, { useMemo } from 'react';
import {
  Switch as DefaultSwitch,
  SwitchProps as DefaultSwitchProps,
} from 'react-native';

import { useThemeColors } from '../../hooks/useThemeColor';

interface SwitchProps extends DefaultSwitchProps {}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    secondaryText,
    tint: { primary },
  } = useThemeColors();

  const fadedTint = useMemo(() => Color(primary).fade(0.5).string(), [primary]);
  const fadedText = useMemo(
    () => Color(secondaryText).fade(0.5).string(),
    [secondaryText]
  );

  return (
    <DefaultSwitch
      thumbColor={props.value ? primary : secondaryText}
      trackColor={{
        false: fadedText,
        true: fadedTint,
      }}
      {...props}
    />
  );
};
export default Switch;
