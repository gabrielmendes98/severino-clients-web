import CancelIcon from '@mui/icons-material/Cancel';
import { PreparedWorkerProfile } from 'pages/profile/[id]/utils';
import ListFallback from 'templates/ListFallback';
import Stack from 'components/Stack';
import Box from 'components/Box';
import Text from 'components/Text';
import InfoTitle from '../InfoTitle';

interface Props {
  experiences: PreparedWorkerProfile['experiences'];
}

const Experiences = ({ experiences }: Props) => (
  <>
    <InfoTitle title="Experiências" />

    <Stack spacing={2}>
      {experiences ? (
        experiences.map(experience => (
          <Box key={experience.id}>
            <Text color="text.primary" fontWeight={500}>
              {experience.role}
            </Text>
            {experience.company && (
              <Text color="text.secondary">{experience.company}</Text>
            )}
            <Text color="text.secondary">{experience.time}</Text>
          </Box>
        ))
      ) : (
        <ListFallback
          message="Este profissional ainda não adicionou experiências profissionais."
          icon={CancelIcon}
          TextProps={{ variant: 'h6' }}
        />
      )}
    </Stack>
  </>
);

export default Experiences;
