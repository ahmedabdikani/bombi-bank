import React from 'react';

import BackButtonNative from './button/BackButtonNative';
import { Spacer } from './spacer';
import { SubheadingEmphasized } from './typography';
import View from './View';

interface HeaderProps {
  title: string;
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ title, color }) => {
  return (
    <View direction='row' mb='m'>
      <BackButtonNative color={color} />
      <Spacer />
      <SubheadingEmphasized mr='m'>{title}</SubheadingEmphasized>
      <Spacer />
    </View>
  );
};
export default Header;
