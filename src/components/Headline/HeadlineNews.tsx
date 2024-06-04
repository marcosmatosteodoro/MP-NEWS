'use client';
import { Box, Flex, GridItem, Link, Text } from '@chakra-ui/react';

type HeadlineNewsProps = {
  img: string;
  area: string;
};

export const HeadlineNews = ({ img, area }: HeadlineNewsProps) => (
  <GridItem p="0" area={area}>
    <Box
      h={'full'}
      borderRadius={'12px'}
      bgImage={`url("${img}")`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Link href="./" h={'full'}>
        <Flex
          h={'full'}
          w={'full'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Text>Candidate governista</Text>

          <Box>
            <Text>Candidate governista</Text>
            <Text>Candidate governista</Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  </GridItem>
);
