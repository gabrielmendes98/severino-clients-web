import CancelIcon from '@mui/icons-material/Cancel';
import { PreparedWorkerProfile } from 'pages/profile/[id]/utils';
import ListFallback from 'templates/ListFallback';
import Stack from 'components/Stack';
import Box from 'components/Box';
import Text from 'components/Text';
import InfoTitle from '../InfoTitle';

interface Props {
  academicGraduations: PreparedWorkerProfile['academicGraduations'];
}

const AcademicGraduations = ({ academicGraduations }: Props) => (
  <>
    <InfoTitle title="Formação acadêmica" />

    <Stack spacing={2}>
      {academicGraduations ? (
        academicGraduations.map(academicGraduation => (
          <Box key={academicGraduation.id}>
            <Text color="text.primary">
              {academicGraduation.degree.description}
            </Text>
            {Boolean(academicGraduation.studyArea) && (
              <Text color="text.secondary">{academicGraduation.studyArea}</Text>
            )}
            <Text color="text.secondary">{academicGraduation.institution}</Text>
          </Box>
        ))
      ) : (
        <ListFallback
          message="Este profissional ainda não adicionou formação acadêmica."
          icon={CancelIcon}
          TextProps={{ variant: 'h6' }}
        />
      )}
    </Stack>
  </>
);

export default AcademicGraduations;
