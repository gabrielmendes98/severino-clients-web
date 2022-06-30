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

interface WorkerSummaryList extends ListPagination {
  workers: WorkerSummary[];
}

interface WorkPhoto {
  id: string;
  createdAt: string;
  updateAt: string;
  profileId: string;
  url: string;
  title: string;
}

interface Skill {
  id: string;
  createdAt: string;
  updateAt: string;
  profileId: string;
  name: string;
}

interface WorkerProfile {
  id: string;
  avatarUrl: string | null;
  name: string;
  rating: number;
  hasWhatsapp: boolean;
  phone: string | null;
  location: string;
  services: string[] | undefined;
  workPhotos: WorkPhoto[] | undefined;
  experiences:
    | {
        id: string;
        role: string;
        company: string | null;
        time: string;
      }[]
    | undefined;
  academicGraduations:
    | {
        id: string;
        institution: string;
        studyArea: string | null;
        degree: {
          description: string;
        };
      }[]
    | undefined;
  skills: Skill[] | undefined;
  isFavorite: boolean;
  description: string | undefined;
}

interface WorkerReviewSubmition {
  workerId: string;
  rating: number;
  title: string;
  comment: string;
}

interface WorkerReview {
  id: string;
  createdAt: strin;
  updatedAt: string;
  customerId: string;
  workerId: string;
  title: string;
  comment?: string;
  rating?: number;
  isGood: boolean;
}

interface WorkerReviewList extends ListPagination {
  reviews: WorkerReview[];
}
