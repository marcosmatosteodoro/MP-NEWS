'use client';
import { Box, Flex, GridItem, Link, Text } from '@chakra-ui/react';

type HeadlineNewsProps = {
  title: string;
  subTitle: string;
  img: string;
  area: string;
  text?: string;
  main?: boolean;
};

export const HeadlineNews = ({ title, subTitle, img, area, text, main }: HeadlineNewsProps) => {
  const fontSize = !!main ? '40px' : '24px';

  return (
    <GridItem p="0" area={area}>
      <Box
        h={'full'}
        borderRadius={'12px'}
        bgImage={`url("${img}")`}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        backgroundSize={'100%'}
        transition={'background-size 0.3s ease-in-out'}
        _hover={{
          backgroundSize: '105%',
        }}
      >
        <Link href="./" h={'full'} textDecoration={'none !important'}>
          <Flex
            h={'full'}
            w={'full'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            pt={6}
            pr={12}
            pb={0}
            pl={6}
          >
            <Text
              fontSize={'14px'}
              color={'#fff'}
              textShadow={'0 1px 2px rgba(0, 0, 0, .6)'}
              fontWeight={'600'}
              >
              {title}
            </Text>

            <Box mb={'24px'} gap={"24px"}>
              <Text
                fontSize={fontSize}
                color={main ? '#c4170c' : 'white'}
                textShadow={'0 1px 3px rgba(0,0,0,.8)'}
                fontWeight={'600'}
              >
                {subTitle}
              </Text>
              {!main && text && (
                <Text
                  fontSize={'16px'}
                  color={'white'}
                  textShadow={'0 1px 3px rgba(0,0,0,.8)'}
                  fontWeight={'400'}
                  mt={2}
                  ml={4}
                >
                  {text}
                </Text>
              )}

            </Box>
          </Flex>
        </Link>
      </Box>
    </GridItem>
  )
};
