export const parseToSelect = (
  options: any[],
  labelMapper: string,
  valueMapper: string,
) =>
  options.map(option => ({
    label: option[labelMapper],
    value: option[valueMapper],
  }));
