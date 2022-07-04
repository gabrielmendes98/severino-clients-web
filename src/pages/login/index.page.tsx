import Image from 'next/image';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Formik, Form } from 'formik';
import loginDoodle from 'assets/user/loginDoodle.svg';
import { useDispatch, useSelector } from 'common/store/hooks';
import { selectUserLoading, login, oAuthLogin } from 'common/slices/user';
import { getAuthProviderToken, handleAuthResponse } from 'common/utils/auth';
import GoogleLoginButton from 'templates/OAuthButtons/Google';
import Grid from 'components/Grid';
import IconButton from 'components/IconButton';
import Paper from 'components/Paper';
import Stack from 'components/Stack';
import Text from 'components/Text';
import Input from 'components/Input';
import Box from 'components/Box';
import InputAdornment from 'components/Input/InputAdornment';
import Button from 'components/Button';
import PasswordInput from 'components/Input/Password';
import { initialValues, validations } from './utils';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(login(values)).then(handleAuthResponse);
  };

  const onSuccess = (provider: OAuthProvider) => (response: any) => {
    dispatch(
      oAuthLogin({
        token: getAuthProviderToken(provider, response),
        provider: provider,
      }),
    ).then(handleAuthResponse);
  };

  return (
    <Grid container spacing={{ md: 10 }}>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent={{ md: 'flex-end', xs: 'center' }}
      >
        <Image
          src={loginDoodle}
          alt="Login Doodle"
          width={300}
          height={300}
          priority
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent={{ md: 'start', xs: 'center' }}
      >
        <Paper>
          <Box padding={4} minWidth={{ sm: 450 }}>
            <Box marginBottom={3} marginLeft={-2} marginTop={-2}>
              <IconButton aria-label="voltar" title="Voltar" color="primary">
                <ArrowBack />
              </IconButton>
            </Box>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validations}
            >
              <Form noValidate>
                <Stack spacing={3}>
                  <Text color="primary" fontWeight="bold" textAlign="center">
                    Informe seus dados para continuar
                  </Text>

                  <Input
                    placeholder="E-mail"
                    name="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <PasswordInput
                    placeholder="Senha"
                    name="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    Entrar
                  </Button>
                </Stack>
              </Form>
            </Formik>

            <Box marginTop={2}>
              <GoogleLoginButton
                onSuccess={onSuccess('GOOGLE')}
                disabled={loading}
              />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
