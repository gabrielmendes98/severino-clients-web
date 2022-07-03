import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import workersService from 'api/services/workers';
import useFetch from 'common/hooks/useFetch';
import { parseNumberToWhatsAppLink } from 'common/utils/parsers';
import Stack from 'components/Stack';
import PhotoAndActionsSection from './Sections/PhotoAndActions';
import { prepareData, PreparedWorkerProfile } from './utils';
import InfoSection from './Sections/Info';
import ProfessionalInfoSection from './Sections/ProfessionalInfo';
import Reviews from './Sections/Reviews';
import ProfileLoader from './Loader';

const WorkerProfile = () => {
  const router = useRouter();
  const [data, setData] = useState<PreparedWorkerProfile>();
  const { request: getProfile, loading } = useFetch(workersService.getProfile);

  useEffect(() => {
    getProfile(String(router.query.id)).then(prepareData).then(setData);
  }, [getProfile, router.query.id]);

  return (
    <Stack maxWidth="800px" margin="0 auto" spacing={2}>
      {loading || !data ? (
        <ProfileLoader />
      ) : (
        <>
          <PhotoAndActionsSection
            id={data.id}
            avatarUrl={data.avatarUrl}
            hasWhatsapp={data.hasWhatsapp}
            isFavorite={data.isFavorite}
            name={data.name}
            whatsAppLink={
              data.phone ? parseNumberToWhatsAppLink(data.phone) : null
            }
          />

          <InfoSection
            name={data.name}
            rating={data.rating}
            phone={data.formattedPhone}
            location={data.location}
            services={data.services}
            description={data.description}
            hasWhatsapp={data.hasWhatsappLabel}
          />

          <ProfessionalInfoSection
            experiences={data.experiences}
            academicGraduations={data.academicGraduations}
            skills={data.skills}
          />

          <Reviews rating={data.rating} name={data.name} />
        </>
      )}
    </Stack>
  );
};

export default WorkerProfile;
