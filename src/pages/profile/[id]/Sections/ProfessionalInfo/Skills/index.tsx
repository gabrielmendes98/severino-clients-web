import CancelIcon from '@mui/icons-material/Cancel';
import { PreparedWorkerProfile } from 'pages/profile/[id]/utils';
import ListFallback from 'templates/ListFallback';
import Stack from 'components/Stack';
import Box from 'components/Box';
import Text from 'components/Text';
import SectionTitle from '../../../Section/Title';

interface Props {
  skills: PreparedWorkerProfile['skills'];
}

const Skills = ({ skills }: Props) => (
  <>
    <SectionTitle title="Competências" />

    <Stack spacing={2}>
      {skills ? (
        skills.map(skill => (
          <Box key={skill.id}>
            <Text color="text.primary">{skill.name}</Text>
          </Box>
        ))
      ) : (
        <ListFallback
          message="Este profissional ainda não adicionou competências."
          icon={CancelIcon}
          TextProps={{ variant: 'h6' }}
        />
      )}
    </Stack>
  </>
);

export default Skills;
