import React from 'react';
import {
  Drawer as DefaultDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useDrawerContext } from '../hook/useContext';
import PrimaryButton from './shared/button/PrimaryButton';
import { Caption } from './shared/typography';
import routes from '../data/routes';
import { VStack } from './shared/Stack';

const Drawer: React.FC = () => {
  const { isOpen, onClose } = useDrawerContext();
  const router = useRouter();

  return (
    <DefaultDrawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <VStack align='flex-start'>
            {routes.map(({ name, path }, index) => {
              const isActive = router.pathname === path;
              return (
                <Link
                  key={index}
                  onClick={() => {
                    router.push(path);
                    onClose();
                  }}
                >
                  <Caption
                    fontWeight='semibold'
                    color={isActive ? 'brand.1' : 'black'}
                  >
                    {name}
                  </Caption>
                </Link>
              );
            })}
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <PrimaryButton m='auto'>Sign in</PrimaryButton>
        </DrawerFooter>
      </DrawerContent>
    </DefaultDrawer>
  );
};
export default Drawer;
