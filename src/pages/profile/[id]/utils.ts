import { formatBoolean, formatPhone } from 'common/utils/formatters';

export interface PreparedWorkerProfile {
  rating: number;
  id: string;
  avatarUrl: string | null;
  name: string;
  hasWhatsapp: boolean;
  phone: string | null;
  formattedPhone: string | undefined;
  location: string;
  services: string | undefined;
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
  hasWhatsappLabel: string;
  description: string | undefined;
}

export const prepareData = (data: WorkerProfile): PreparedWorkerProfile => ({
  ...data,
  rating: Number(data.rating.toFixed(1)),
  phone: data.phone ? formatPhone(data.phone) : null,
  formattedPhone: data.phone ? formatPhone(data.phone) : undefined,
  services: data.services?.join(', '),
  hasWhatsappLabel: formatBoolean(data.hasWhatsapp),
});
