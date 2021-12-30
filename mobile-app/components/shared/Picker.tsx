import React from 'react';
import {
  Picker as DefaultPicker,
  PickerProps as DefaultPickerProps,
  PickerItemProps,
} from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

import Card from './Card';
import { useThemeColors } from '../../hooks/useThemeColor';
import View from './View';

interface PickerProps {
  pickerProps?: DefaultPickerProps;
  pickerItemProps?: PickerItemProps;
  options: string[];
  leftIcon?: React.ReactElement;
}

let Picker: React.FC<PickerProps> = (props) => {
  const { pickerProps, pickerItemProps, options, leftIcon } = props;
  const {
    tint: { primary },
  } = useThemeColors();

  return (
    <Card
      mb='m'
      px='s'
      borderRadius='s'
      flex={1}
      direction='row'
      align='center'
    >
      {leftIcon}
      <View flex={1}>
        <DefaultPicker dropdownIconColor={primary} {...pickerProps}>
          {options.map((option) => (
            <DefaultPicker.Item
              {...pickerItemProps}
              label={option}
              value={option}
              key={option}
            ></DefaultPicker.Item>
          ))}
        </DefaultPicker>
      </View>
    </Card>
  );
};

export default Picker;
