'use client';
import { Advertising, Header } from '@/components';
import { Container, Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
      templateAreas={`"header header" "main main"`}
      gridTemplateRows={'75px 1fr'}
      minH={'100vh'}
      gap={10}
    >
      <Header title={'MP-NEWS'} />

      <GridItem p="0" bg="orange.300" area={'main'} as="main">
        <Container maxW={'1700px'}>
          <Advertising />
          Main
        </Container>
      </GridItem>
    </Grid>
  );
}
