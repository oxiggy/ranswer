import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSections = () => {
  return useQuery<string[]>({
    queryKey: ['sections'],
    queryFn: async () => {
      const storedData = localStorage.getItem('sections');
      return storedData ? JSON.parse(storedData) : [];
    },
  })
}

type SectionsSetInput = {
  item: string
}

export const useMutationSectionsSet = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ item }: SectionsSetInput) => {
      const storedData = localStorage.getItem('sections');
      const selected: string[] = storedData ? JSON.parse(storedData) : [];

      let newSelected: string[];

      if (selected.includes(item)) {
        newSelected = selected.filter((selectedItem: string) => selectedItem !== item);
      } else {
        if (selected.length < 3) {
          newSelected = [...selected, item];
        } else {
          return selected;
        }
      }

      localStorage.setItem('sections', JSON.stringify(newSelected));
      return newSelected;
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['sections'] });
    }
  });
}