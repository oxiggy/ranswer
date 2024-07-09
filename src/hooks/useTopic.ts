import { useQuery } from "@tanstack/react-query";
import { useSections } from "@/hooks/useSections";
import { data } from "src/data/data";

const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const useTopic = () => {
  const sections = useSections();

  return useQuery({
    queryKey: ['topic', sections.data],
    queryFn: async () => {
      let randomSection;
      if (sections.data && sections.data.length > 0) {
        randomSection = getRandomElement(sections.data);
      } else {
        randomSection = getRandomElement(data).category;
      }

      const questions = data.filter((item) => item.category === randomSection)[0].questions;

      return getRandomElement(questions);
    },
    enabled: false,
  })
}