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
