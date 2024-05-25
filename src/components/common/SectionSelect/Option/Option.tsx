import { ReactNode } from "react";

type OptionProps = {
  label: string;
  icon: ReactNode,
  selected?: boolean;
}

const Option = (props: OptionProps) => {
  return (
    <div
      className="data-[selected]:bg-slate-900 hover:bg-slate-500 hover:text-slate-100 bg-slate-100 w-[90px] h-[90px] rounded-md  flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-in-out"
      data-selected={props.selected ?? undefined}
    >
      <div>{props.icon}</div>
      <div className="font-serif font-bold text-xs">{props.label}</div>
    </div>
  )
}

export default Option;