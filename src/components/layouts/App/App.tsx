import { useEffect } from "react";
import { Outlet } from "@remix-run/react";
import { useMutationThemeSet, useTheme } from "@/hooks/useTheme";
import SectionSelect from "@/components/common/SectionSelect/SectionSelect";

export function App() {
  const themeRes = useTheme();
  const setTheme = useMutationThemeSet();

  useEffect(() => {
    document.body.setAttribute('data-theme', themeRes.data || 'light')
  }, [themeRes.data])

  return (
    <div  className="h-full flex flex-col ">
      <header className="bg-surface shrink-0 flex justify-between gap-4">
        <div className="text-slate-400 dark:text-slate-600 grow">
          <SectionSelect />
        </div>
        <button
          className="text-primary"
          onClick={() => {
            setTheme.mutate({ theme: "dark" });
          }}
        >
          set dark
        </button>
        <button
          className="text-primary"
          onClick={() => {
            setTheme.mutate({ theme: "light" });
          }}
        >
          set light
        </button>
      </header>
      <Outlet />
    </div>
  );
}
