import Stack from 'components/Stack';
import Section from '../../Section';
import { PreparedWorkerProfile } from '../../utils';
import AcademicGraduations from './AcademicGraduations';
import Experiences from './Experiences';
import Skills from './Skills';

interface Props {
  experiences: PreparedWorkerProfile['experiences'];
  academicGraduations: PreparedWorkerProfile['academicGraduations'];
  skills: PreparedWorkerProfile['skills'];
}

const ProfessionalInfoSection = ({
  experiences,
  academicGraduations,
  skills,
}: Props) => (
  <Section>
    <Stack spacing={2}>
      <Experiences experiences={experiences} />
      <AcademicGraduations academicGraduations={academicGraduations} />
      <Skills skills={skills} />
    </Stack>
  </Section>
);

export default ProfessionalInfoSection;
