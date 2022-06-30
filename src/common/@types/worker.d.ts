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
  deion: string | null;
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
          deion: string;
        } | null;
      }[]
    | undefined;
  skills: Skill[] | undefined;
  isFavorite: boolean;
  description: string | undefined;
}

interface WorkerReview {
  workerId: string;
  rating: number;
  title: string;
  comment: string;
}
