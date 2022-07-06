import Link from 'next/link';
import NoSsr from '@mui/material/NoSsr';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'common/store/hooks';
import { cookieConsent, selectCookieConsented } from 'common/slices/cookie';
import useAppTheme from 'common/hooks/useTheme';
import Paper from 'components/Paper';
import Text from 'components/Text';
import Grid from 'components/Grid';
import Button from 'components/Button';

const CookieInfo = () => {
  const theme = useAppTheme();
  const cookieConsented = useSelector(selectCookieConsented);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleAccept = () => {
    dispatch(cookieConsent());
  };

  if (cookieConsented) {
    return null;
  }

  return (
    <NoSsr>
      <Paper
        sx={{
          position: 'fixed',
          width: '80%',
          bottom: theme => theme.spacing(3),
          left: 0,
          right: 0,
          margin: '0 auto',
          bgcolor: 'background.paper',
          p: 2,
        }}
      >
        <Grid container rowSpacing={2}>
          <Grid container item xs={12} md={11} flexDirection="column">
            <Text variant="h6">Nós respeitamos sua privacidade</Text>
            <Text>
              Utilizamos cookies para salvar suas credenciais, sua localização e
              o tema da aplicação. Entenda como funciona em nossa{' '}
              <Link href="/cookie-policy">política de cookies</Link>
            </Text>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              fullWidth={isSmallScreen}
              onClick={handleAccept}
            >
              Entendi
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </NoSsr>
  );
};

export default CookieInfo;
