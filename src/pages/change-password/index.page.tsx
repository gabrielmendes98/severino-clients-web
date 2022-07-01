import Image from 'next/image';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import changePasswordDoodle from 'assets/user/changePasswordDoodle.svg';
import { useDispatch, useSelector } from 'common/store/hooks';
import { selectUserLoading, changePassword } from 'common/slices/user';
import toast from 'common/utils/toast';
import withAuthentication from 'common/hocs/withAuthentication';
import Grid from 'components/Grid';
import IconButton from 'components/IconButton';
import Paper from 'components/Paper';
import Stack from 'components/Stack';
import Text from 'components/Text';
import Box from 'components/Box';
import Button from 'components/Button';
import PasswordInput from 'components/Input/Password';
import { initialValues, validations } from './utils';

const ChangePassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(changePassword(values)).then(state => {
      if (state.meta.requestStatus !== 'rejected') {
        toast.success('Senha alterada com sucesso!');
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
          src={changePasswordDoodle}
          alt="Login Doodle"
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
                    Trocar senha
                  </Text>

                  <PasswordInput
                    placeholder="Senha atual"
                    name="currentPassword"
                  />

                  <PasswordInput placeholder="Nova senha" name="newPassword" />

                  <PasswordInput
                    placeholder="Confirme a nova senha"
                    name="newPasswordConfirm"
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    Salvar
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

export default withAuthentication(ChangePassword);
