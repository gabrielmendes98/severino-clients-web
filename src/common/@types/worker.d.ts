interface WorkerSummary {
  rating: number | null;
  id: string;
  name: string;
  email: string;
  description: string | null;
  avatarUrl: string | null;
  phone: string | null;
  hasWhatsapp: boolean;
  city: {
    id: string;
    name: string;
    state: {
      id: string;
      acronym: string;
    };
  };
  profile: {
    services: {
      service: {
        name: string;
      };
    }[];
  } | null;
  customerWorkerFavorites?:
    | {
        createdAt: string;
        updatedAt: string;
        customerId: string;
        workerId: string;
      }[]
    | [];
}

interface WorkerSummaryList {
  workers: WorkerSummary[];
  total: number;
  hasNext: boolean;
}
