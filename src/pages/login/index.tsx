import Image from 'next/image';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import loginDoodle from 'assets/user/loginDoodle.svg';
import { useDispatch, useSelector } from 'common/store/hooks';
import { selectUserLoading, login } from 'common/slices/user';
import toast from 'common/utils/toast';
import Grid from 'components/Grid';
import IconButton from 'components/IconButton';
import Paper from 'components/Paper';
import Stack from 'components/Stack';
import Text from 'components/Text';
import Input from 'components/Input';
import Box from 'components/Box';
import InputAdornment from 'components/Input/InputAdornment';
import Button from 'components/Button';
import { initialValues, validations } from './utils';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(login(values))
      .then(state => {
        if (state.meta.requestStatus !== 'rejected') {
          toast.success('Bem-vindo(a) ao Severino');
          router.push('/');
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <Grid container spacing={10}>
      <Grid container item xs={6} justifyContent="flex-end">
        <Image src={loginDoodle} alt="Login Doodle" width={300} height={300} />
      </Grid>

      <Grid container item xs={6}>
        <Paper>
          <Box padding={4} minWidth={450}>
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

                  <Input
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
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
