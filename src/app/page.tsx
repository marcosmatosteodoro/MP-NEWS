'use client';
import { Header } from '@/components';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
      templateAreas={`"header header" "main main"`}
      gridTemplateRows={'75px 1fr'}
      minH={'100vh'}
    >
      <Header title={'MP-NEWS'} />

      <GridItem pl="2" bg="orange.300" area={'main'} as="main">
        Main
      </GridItem>
    </Grid>
  );
}
