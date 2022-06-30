import Stack from 'components/Stack';
import Section from '../../Section';
import InfoItem from './Item';

interface Props {
  name?: string;
  rating?: number;
  phone?: string;
  location?: string;
  services?: string;
  description?: string;
  hasWhatsapp?: string;
}

const InfoSection = ({
  name,
  rating,
  phone,
  location,
  services,
  description,
  hasWhatsapp,
}: Props) => {
  console.log('hello');

  return (
    <Section>
      <Stack spacing={1}>
        <InfoItem label="Nome:" value={name} />
        <InfoItem label="Avaliação média:" value={rating} />
        <InfoItem label="Telefone:" value={phone} />
        <InfoItem label="Tem WhatsApp:" value={hasWhatsapp} />
        <InfoItem label="Localização:" value={location} />
        <InfoItem label="Serviços que presto:" value={services} />
        <InfoItem label="Sobre mim:" value={description} />
      </Stack>
    </Section>
  );
};

export default InfoSection;
