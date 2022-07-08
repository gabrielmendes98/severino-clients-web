import {
  parseLocationsToSelect,
  parseNumberToWhatsAppLink,
  parseToSelect,
} from '../parsers';

describe('parseToSelect', () => {
  test('should map any options to select options pattern', () => {
    const rawArray = [
      { id: 1, description: '123' },
      { id: 2, description: '456' },
    ];
    const parsedOptions = parseToSelect(rawArray, 'description', 'id');
    expect(parsedOptions).toEqual([
      { label: '123', value: 1 },
      { label: '456', value: 2 },
    ]);
  });
});

describe('parseLocationsToSelect', () => {
  test('should map SeverinoLocation array to options pattern', () => {
    const rawArray = [
      {
        id: '1',
        name: 'city 1',
        state: {
          acronym: 'ct1',
          id: '123',
          name: 'city 1 state',
        },
        stateId: '123',
      },
      {
        id: '2',
        name: 'city 2',
        state: {
          acronym: 'ct2',
          id: '223',
          name: 'city 2 state',
        },
        stateId: '223',
      },
    ];
    const parsedOptions = parseLocationsToSelect(rawArray);
    expect(parsedOptions).toEqual([
      { label: 'city 1, ct1', value: '1' },
      { label: 'city 2, ct2', value: '2' },
    ]);
  });
});

describe('parseNumberToWhatsAppLink', () => {
  test('should create whatsapp link with formatted number', () => {
    const link = parseNumberToWhatsAppLink('(11) 9 9999-9999');
    expect(link).toContain('11999999999');
  });
});
