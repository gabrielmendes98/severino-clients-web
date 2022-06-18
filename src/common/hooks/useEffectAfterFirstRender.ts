import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

const useEffectAfterFirstRender = (
  effect: EffectCallback,
  deps: DependencyList,
): void => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectAfterFirstRender;
