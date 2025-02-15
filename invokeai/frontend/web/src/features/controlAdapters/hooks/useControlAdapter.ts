import { createSelector } from '@reduxjs/toolkit';
import { stateSelector } from 'app/store/store';
import { useMemo } from 'react';
import { selectControlAdapterById } from 'features/controlAdapters/store/controlAdaptersSlice';
import { useAppSelector } from 'app/store/storeHooks';
import { defaultSelectorOptions } from 'app/store/util/defaultMemoizeOptions';

export const useControlAdapter = (id: string) => {
  const selector = useMemo(
    () =>
      createSelector(
        stateSelector,
        ({ controlAdapters }) => selectControlAdapterById(controlAdapters, id),
        defaultSelectorOptions
      ),
    [id]
  );

  const controlAdapter = useAppSelector(selector);

  return controlAdapter;
};
