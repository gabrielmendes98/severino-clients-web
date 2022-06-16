import { formatPhone } from 'common/utils/formatters';
import { parseNumberToWhatsAppLink } from 'common/utils/parsers';
import { WorkerCardProps } from './index';

export const parseWorkerSummaryToCard = (
  workers: WorkerSummary[],
): WorkerCardProps[] =>
  workers.map(worker => ({
    id: worker.id,
    avatarUrl: worker.avatarUrl,
    isFavorite: (worker.customerWorkerFavorites || []).length > 0,
    location: `${worker.city.name}, ${worker.city.state.acronym}`,
    name: worker.name,
    phoneNumber: formatPhone(worker.phone || ''),
    rating: worker.rating ? Number(worker.rating.toFixed(1)) : null,
    services: worker.profile?.services.reduce(
      (prev, next) => prev + ', ' + next.service.name,
      worker.profile.services[0].service.name,
    ),
    whatsAppLink: worker.phone ? parseNumberToWhatsAppLink(worker.phone) : null,
    hasWhatsapp: worker.hasWhatsapp,
  }));
