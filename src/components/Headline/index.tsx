'use client';
import { Grid } from '@chakra-ui/react';
import { HeadlineNews } from './HeadlineNews';

export const Headline = () => {
  const img =
    'https://s2-g1.glbimg.com/t9wMGpMCN2XfJWVTyNGYM-WQSgA=/1583x0:5199x3616/570x620/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/m/w/anVAPmRbqsnzLrWrFoSA/2024-06-03t084751z-220403323-rc2i38a6adkv-rtrmadp-3-mexico-election.jpg';
  return (
    <Grid
      templateAreas={`"main primary" "main secondary"`}
      gridTemplateRows={'1fr 1fr'}
      gridTemplateColumns={'1fr 1fr'}
      h={'550px'}
      gap={3}
      my={'40px'}
    >
      <HeadlineNews img={img} area={'main'} />
      <HeadlineNews img={img} area={'primary'} />
      <HeadlineNews img={img} area={'secondary'} />
    </Grid>
  );
};
