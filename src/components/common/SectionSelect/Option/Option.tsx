import { ReactNode } from "react";
import clsx from "clsx";

type OptionProps = {
  label: string;
  icon: ReactNode,
  selected?: boolean;
  onClick: (item: string) => void;
}

const Option = (props: OptionProps) => {
  return (
    <div
      className={clsx(
        "data-[selected=true]:bg-neutral-300 hover:data-[selected=true]:bg-neutral-900",
        "text-neutral-700 bg-neutral-100 hover:text-neutral-100 hover:bg-neutral-600",
        "dark:text-neutral-300 dark:bg-neutral-800 dark:hover:text-neutral-800 dark:hover:bg-neutral-400",
        "dark:data-[selected=true]:bg-neutral-700 dark:hover:data-[selected=true]:bg-neutral-300",
        "w-24 h-24 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-in-out",
      )}
      data-selected={props.selected ?? undefined}
      onClick={() => props.onClick(props.label)}
    >
      <div>{props.icon}</div>
      <div className="font-serif font-bold text-xs select-none">{props.label}</div>
    </div>
  )
}

export default Option;