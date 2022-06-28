import { Form, Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import workersService from 'api/services/workers';
import useFetch from 'common/hooks/useFetch';
import Stars from 'templates/Stars';
import Button from 'components/Button';
import Grid from 'components/Grid';
import Input from 'components/Input';
import Text from 'components/Text';
import { InjectedModalProps } from 'components/Modal/withModal';
import { initialValues, validations } from './utils';

export interface RateWorkerProps extends InjectedModalProps {
  id: string;
  name: string;
}

const RateWorker = ({ id, name, closeModal }: RateWorkerProps) => {
  const [rating, setRating] = useState(0);
  const { request: reviewWorker, loading } = useFetch(
    workersService.createReview,
  );

  const handleStarsClick = (index: number) => setRating(index + 1);

  const handleSubmit = (values: typeof initialValues) => {
    if (!rating) {
      toast.error('Selecione uma quantidade de estrelas para sua avaliação.');
      return;
    }

    reviewWorker({
      ...values,
      workerId: id,
      rating,
    }).then(() => {
      toast.success('Agradecemos sua avaliação.');
      closeModal();
    });
  };

  return (
    <Grid container>
      <Text variant="h6" marginBottom={2}>
        Avaliando: {name}
      </Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stars length={rating} onClick={handleStarsClick} />
            </Grid>
            <Grid item xs={12}>
              <Input name="title" label="Título" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="comment"
                multiline
                rows={3}
                label="Comentário"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                loading={loading}
                disabled={loading}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
};

export default RateWorker;
