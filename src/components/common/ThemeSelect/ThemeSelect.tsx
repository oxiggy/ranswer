import { useEffect } from "react";
import clsx from "clsx";
import { useMutationThemeSet, useTheme } from "@/hooks/useTheme";

const ThemeSelect = () => {
  const themeRes = useTheme();
  const setTheme = useMutationThemeSet();

  useEffect(() => {
    document.body.setAttribute('data-theme', themeRes.data || 'light')
  }, [themeRes.data])

  return (
    <div className="shrink-0 flex h-8 items-center">
      <div
        className={clsx(
          "flex w-14 flex-none cursor-pointer rounded-full",
          "bg-neutral-200/50 dark:bg-neutral-600 transition-colors duration-200 ease-in-out",
        )}
        onClick={() => setTheme.mutate({ theme: themeRes.data === 'light' ? 'dark' : 'light' })}
      >
        <span
          className={clsx(
            "h-6 w-6 m-1 translate-x-1 transform rounded-full transition duration-200 ease-in-out",
            themeRes.data === 'light' ? "bg-orange-300" : "bg-transparent translate-x-4 shadow-[0.5rem_0_0_0_#ffe5b5]"
          )}
        />
      </div>
      <input className="hidden" type="checkbox" checked aria-label="theme" />
    </div>
  );
};

export default ThemeSelect;