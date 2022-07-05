import { InferGetStaticPropsType } from 'next';
import cookiesService from 'api/services/cookies';
import Grid from 'components/Grid';
import Text from 'components/Text';

const CookiePolicy = ({
  term,
  updateAt,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Text variant="h4">Política de Cookies</Text>
    </Grid>

    <Grid item xs={12}>
      <Text color="text.secondary">{term}</Text>
    </Grid>

    <Grid item xs={12}>
      <Text color="text.secondary">{`Política atualizada em: ${new Date(
        updateAt,
      ).toLocaleDateString('pt-br')}`}</Text>
    </Grid>
  </Grid>
);

export const getStaticProps = async () =>
  cookiesService
    .getActivePolicy()
    .then(data => ({
      props: {
        ...data,
      },
      revalidate: 60 * 60 * 24 * 5,
    }))
    .catch(() => ({
      props: {
        id: '',
        term: 'Política não encontrada',
        active: false,
        createdAt: new Date().toString(),
        updateAt: new Date().toString(),
      },
      revalidate: 60 * 60 * 24 * 5,
    }));

export default CookiePolicy;
