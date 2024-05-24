import { useMutation, useQuery, useQueryClient } from "react-query";

export const useTheme = () => {
  return useQuery({
    queryKey: ['theme'],
    queryFn: async () => {
      return localStorage.getItem('theme') || 'light'
    },
  })
}

type ThemeSetInput = {
  theme: 'dark' | 'light'
}

export const useMutationThemeSet = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ theme }: ThemeSetInput) => {
      localStorage.setItem('theme', theme)
      return null
    },
    onSettled: async () => {
      await queryClient.invalidateQueries(['theme'])
    }
  })
}