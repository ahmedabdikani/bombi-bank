import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface Context {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const DrawerContext = React.createContext<Context>({} as Context);

export const DrawerProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        onToggle,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
