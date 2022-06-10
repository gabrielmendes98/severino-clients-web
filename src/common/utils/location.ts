import toast from 'common/utils/toast';

const getPositionPromise = (
  options?: PositionOptions,
): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options),
  );

export const getPosition = () =>
  getPositionPromise()
    .then(position => ({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }))
    .catch(error => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          toast.error(
            'Você precisa dar permissão para encontrarmos sua localização.',
          );
          break;
        case error.POSITION_UNAVAILABLE:
          toast.error('Informação de localização não encontrada.');
          break;
        case error.TIMEOUT:
          toast.error(
            'Não conseguimos obter sua localização, tente novamente mais tarde.',
          );
          break;
        case error.UNKNOWN_ERROR:
          toast.error('Erro ao obter localização.');
          break;
      }
    });
