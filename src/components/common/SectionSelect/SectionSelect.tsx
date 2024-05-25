import { useState } from "react";
import * as Popover from '@radix-ui/react-popover';
import ArrowIcon from "src/assets/icons/arrow-down.svg?react";
import Option from "src/components/common/SectionSelect/Option/Option";
import { data } from "src/data/data";

const SectionSelect = () => {
  const [selected] = useState([]);

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className="w-[100px] h-[35px] inline-flex items-center justify-center gap-1 text-primary bg-surface cursor-pointer outline-none"
            aria-label="Update dimensions"
          >
            {selected.length > 0 ? (
              <div>selected</div>
            ) : (
              <p className="font-serif font-bold">Custom</p>
            )}
            <ArrowIcon style={{ height: '1.35rem', width: 'auto', marginBottom: '-2px' }} />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="rounded p-5 w-[900px] bg-surface shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <p className="text-mauve12 text-[15px] leading-[19px] mb-2.5">Select topics</p>
            <div className="flex gap-2 items-center flex-wrap">
              {data.map((item, index) => (
                <Option
                  key={index}
                  icon={item.icon}
                  label={item.category}
                />
              ))}
            </div>
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
          x
        </Popover.Close>
          <Popover.Arrow className="fill-surface" />
        </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default SectionSelect;