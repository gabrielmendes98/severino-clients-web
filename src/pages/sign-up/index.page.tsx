import Image from 'next/image';
import ArrowBack from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import signUpDoodle from 'assets/user/signUpDoodle.svg';
import toast from 'common/utils/toast';
import { useDispatch, useSelector } from 'common/store/hooks';
import { selectUserLoading, signUp } from 'common/slices/user';
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

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(signUp(values)).then(state => {
      if (state.meta.requestStatus !== 'rejected') {
        toast.success('Bem-vindo(a) ao Severino');
        router.push('/');
      }
    });
  };

  return (
    <Grid container spacing={{ md: 10 }}>
      <Grid
        container
        xs={12}
        md={6}
        justifyContent={{ md: 'flex-end', xs: 'center' }}
      >
        <Image
          src={signUpDoodle}
          alt="Sign Up Doodle"
          width={300}
          height={300}
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
                    placeholder="Nome"
                    name="name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                  />

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
                    Criar conta
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

export default SignUp;
