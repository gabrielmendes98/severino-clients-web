import { useRouter } from 'next/router';

const ServiceById = () => {
  const router = useRouter();

  return <h1>Workers {router.query.id}</h1>;
};

export default ServiceById;
