import React from 'react';
import {
  Button,
  Divider,
  HStack,
  Link,
  MenuButton,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import PrimaryButton from './button/PrimaryButton';
import Logo from './Logo';
import { Body1, Caption } from './typography';
import Wrapper from './Wrapper';
import useScreenSize from '../../hook/useScreenSize';
import { useDrawerContext } from '../../hook/useContext';
import routes from '../../data/routes';
import Image from './Image';

interface HeaderProps {}

const pageLinks = ['Bank', 'About', 'Open Account', 'Card', 'Online'];

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const { onToggle } = useDrawerContext();
  const isMobile = useScreenSize().width < 768;

  if (isMobile) {
    return (
      <HStack p='4' justify='space-between'>
        <Logo />
        <Button onClick={onToggle}>
          <Image width={28} height={28} src='/images/menu.png' alt='menu' />
        </Button>
      </HStack>
    );
  }
  return (
    <Wrapper>
      <HStack spacing='8'>
        <VStack align='stretch' flex={1} py='4' spacing={0}>
          <HStack spacing='8'>
            {routes.map(({ name, path }, index) => {
              const isActive = router.pathname === path;
              return (
                <NextLink href={path} key={index} passHref>
                  <Link
                    pb='4'
                    borderBottomColor='brand.1'
                    borderBottomWidth={isActive ? '3px' : '0px'}
                  >
                    <Caption
                      fontWeight='semibold'
                      color={isActive ? 'black' : 'gray'}
                    >
                      {name}
                    </Caption>
                  </Link>
                </NextLink>
              );
            })}
          </HStack>
          <Divider />
          <HStack justify='space-between' pt='4'>
            <Logo />
            <HStack spacing='4'>
              {pageLinks.map((link) => (
                <Link key={link} href='#'>
                  <Body1 fontWeight='medium'>{link}</Body1>
                </Link>
              ))}
            </HStack>
            <HStack />
          </HStack>
        </VStack>
        <PrimaryButton>Sign in</PrimaryButton>
      </HStack>
    </Wrapper>
  );
};
export default Header;
