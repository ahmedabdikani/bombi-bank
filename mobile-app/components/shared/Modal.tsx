import React from 'react';
import { Modal as DefaultModal } from 'react-native';

import Layout from '../../constants/Layout';
import Button from './button/Button';

const { height, width } = Layout.window;

interface ModalProps {
  visible: boolean;
  toggleVisible: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, toggleVisible, children }) => {
  return (
    <DefaultModal
      statusBarTranslucent
      transparent
      animationType='slide'
      visible={visible}
    >
      <Button
        onPress={toggleVisible}
        h={height}
        w={width}
        pos='absolute'
        bg={'rgba(0,0,0,0.5)' as any}
      />
      {children}
    </DefaultModal>
  );
};

export default Modal;
