import React from 'react';

import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';
import { BodyEmphasized } from '../typography';

import ButtonWithElevation from './ButtonWithElevation';

interface ButtonWithTextProps
  extends React.ComponentProps<typeof ButtonWithElevation> {
  label: string;
}

const ButtonWithText: React.FC<ButtonWithTextProps> = ({
  label,
  bg = 'primary',
  ...props
}) => {
  let color: string | undefined;

  switch (bg) {
    case 'primary':
      color = 'white';
      break;
    case 'secondary':
      color = 'white';
      break;
    case 'white':
      color = PRIMARY_TINT_COLOR;
      break;
    default:
      color = undefined;
  }

  return (
    <ButtonWithElevation
      bg={bg}
      place='center'
      py='m'
      borderRadius='s'
      {...props}
    >
      <BodyEmphasized color={color}>{label}</BodyEmphasized>
    </ButtonWithElevation>
  );
};

export default ButtonWithText;
