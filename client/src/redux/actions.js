import { ON_SEARCH } from './types';

export const onSearch = name => {
  return {
    type: ON_SEARCH,
    payload: name,
  };
};
