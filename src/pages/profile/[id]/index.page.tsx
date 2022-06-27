import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import workersService from 'api/services/workers';
import useFetch from 'common/hooks/useFetch';
import { parseNumberToWhatsAppLink } from 'common/utils/parsers';
import Grid from 'components/Grid';
import PhotoAndActionsSection from './Sections/PhotoAndActions';

const WorkerProfile = () => {
  const router = useRouter();
  const [data, setData] = useState<WorkerProfile>();
  const { request: getProfile, loading } = useFetch(workersService.getProfile);

  useEffect(() => {
    getProfile(String(router.query.id)).then(setData);
  }, [getProfile, router.query.id]);

  if (loading || !data) {
    return <div>loading...</div>;
  }

  return (
    <Grid container maxWidth="800px" margin="0 auto">
      <PhotoAndActionsSection
        id={data.id}
        avatarUrl={data.avatarUrl}
        hasWhatsapp={data.hasWhatsapp}
        isFavorite={data.isFavorite}
        name={data.name}
        whatsAppLink={data.phone ? parseNumberToWhatsAppLink(data.phone) : null}
      />
    </Grid>
  );
};

export default WorkerProfile;
