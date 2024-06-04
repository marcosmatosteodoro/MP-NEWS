'use client';
import { Flex, GridItem, Heading } from '@chakra-ui/react';

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <GridItem
    p="0"
    bg="#C4170C"
    area={'header'}
    as="header"
    position="sticky"
    top="0"
    zIndex="10"
  >
    <Flex
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      h={'full'}
    >
      <Heading as="h1">{title}</Heading>
    </Flex>
  </GridItem>
);
