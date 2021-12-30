import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Button
      _hover={{
        opacity: 0.8,
      }}
      colorScheme='brand.1'
      px='8'
      bgColor='brand.1'
      {...props}
    />
  );
};
export default PrimaryButton;
