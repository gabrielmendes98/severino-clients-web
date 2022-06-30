interface Service {
  name: string;
  serviceCategoryName: string;
  avatarUrl: string;
  serviceCategoryId: string;
  id: string;
}

interface ServiceList extends ListPagination {
  services: Service[];
}
