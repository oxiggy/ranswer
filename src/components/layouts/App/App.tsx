import { Outlet } from "@remix-run/react";
import SectionSelect from "@/components/common/SectionSelect/SectionSelect";
import ThemeSelect from "@/components/common/ThemeSelect/ThemeSelect";

export function App() {
  return (
    <div  className="h-full flex flex-col ">
      <header className="bg-surface shrink-0 flex justify-between gap-4 p-2">
        <div className="grow">
          <SectionSelect />
        </div>
        <ThemeSelect />
      </header>
      <Outlet />
    </div>
  );
}
