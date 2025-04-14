import { useQuery } from '@tanstack/react-query';

import { getAutoCompleteResults } from '@/apis/map';

export const useAutoCompleteResultsQuery = (keyword: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['autoCompleteResults', keyword],
    queryFn: () => getAutoCompleteResults(keyword),
  });

  return { results: data?.results ?? [], isLoading };
};
