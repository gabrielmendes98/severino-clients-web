import { WHATSAPP_URL } from 'common/constants';
import { onlyNumbersFormat } from './formatters';

export const parseToSelect = (
  options: any[],
  labelMapper: string,
  valueMapper: string,
) =>
  options.map(option => ({
    label: option[labelMapper],
    value: option[valueMapper],
  }));

export const parseLocationsToSelect = (locations: SeverinoLocation[]) =>
  locations.map(location => ({
    label: `${location.name}, ${location.state.acronym}`,
    value: location.id,
  }));

export const parseNumberToWhatsAppLink = (phoneNumber: string) =>
  WHATSAPP_URL + onlyNumbersFormat(phoneNumber);
