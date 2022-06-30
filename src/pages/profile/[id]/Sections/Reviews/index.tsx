import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import workersService from 'api/services/workers';
import usePagination from 'common/hooks/usePagination';
import Stars from 'templates/Stars';
import Box from 'components/Box';
import Text from 'components/Text';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import Stack from 'components/Stack';
import Button from 'components/Button';
import Section from '../../Section';
import SectionTitle from '../../Section/Title';
import { ReviewType } from './utils';

interface Props {
  name: string;
  rating: number;
}

const Reviews = ({ rating, name }: Props) => {
  const router = useRouter();
  const { page, nextPage, handlePageChange } = usePagination();
  const [filter, setFilter] = useState<ReviewType>(ReviewType.ALL);
  const [reviewsList, setReviewsList] = useState<WorkerReviewList>();

  const handleChange = (event: React.SyntheticEvent, newValue: ReviewType) => {
    handlePageChange(event, 1);
    setFilter(newValue);
  };

  useEffect(() => {
    const params = { page, filter };
    workersService
      .listReviews(String(router.query.id), params)
      .then(setReviewsList);
  }, [router.query.id, page, filter]);

  return (
    <Section>
      <SectionTitle title={`Avaliações sobre ${name}`} />

      <Box display="flex" marginTop={3} marginBottom={3}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text variant="h5" fontWeight="bold">
            {rating}
          </Text>
          <Stars
            length={rating}
            ContainerProps={{ justifyContent: 'center' }}
          />
          <Text variant="caption">{`Média entre ${reviewsList?.total} opiniões`}</Text>
        </Box>
      </Box>

      <Tabs value={filter} onChange={handleChange} centered>
        <Tab label="Todas" value={ReviewType.ALL} sx={{ flex: 1 }} />
        <Tab label="Positivas" value={ReviewType.POSITIVES} sx={{ flex: 1 }} />
        <Tab label="Negativas" value={ReviewType.NEGATIVES} sx={{ flex: 1 }} />
      </Tabs>

      <Stack spacing={3} marginTop={3}>
        {reviewsList?.reviews.map(review => (
          <Box key={review.id}>
            {review.rating ? (
              <Stars length={review.rating} />
            ) : (
              <Text color="text.secondary">Sem avaliação</Text>
            )}
            <Text color="text.primary" fontWeight="bold">
              {review.title}
            </Text>
            <Text color="text.secondary">{review.comment}</Text>
          </Box>
        ))}
      </Stack>

      {Boolean(reviewsList?.reviews) && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            variant="outlined"
            onClick={nextPage}
            disabled={!reviewsList?.hasNext}
          >
            Mostrar mais
          </Button>
        </Box>
      )}
    </Section>
  );
};

export default Reviews;
