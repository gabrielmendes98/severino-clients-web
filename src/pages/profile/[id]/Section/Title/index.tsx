import Text from 'components/Text';

const SectionTitle = ({ title }: { title: string }) => (
  <Text fontWeight="bold" color="secondary" variant="h6">
    {title}
  </Text>
);

export default SectionTitle;
