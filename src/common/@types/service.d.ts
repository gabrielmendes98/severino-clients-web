interface Service {
  name: string;
  serviceCategoryName: string;
  avatarUrl: string;
  serviceCategoryId: string;
  id: string;
}

interface ServiceList {
  services: Service[];
  total: number;
  hasNext: boolean;
}
