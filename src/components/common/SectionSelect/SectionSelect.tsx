import { useMemo } from "react";
import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import clsx from "clsx";
import { data } from "src/data/data";
import Option from "src/components/common/SectionSelect/Option/Option";
// @ts-ignore
import ArrowIcon from "src/assets/icons/arrow-down.svg?react";
// @ts-ignore
import CloseIcon from "src/assets/icons/close.svg?react";
import { useMutationSectionsSet, useSections } from "@/hooks/useSections";

const SectionSelect = () => {
  const  { data: selected = [], isLoading } = useSections();
  const setSections = useMutationSectionsSet();

  const handleOptionClick = (item: string) => {
    setSections.mutate({ item });
  };

  const selectedIcons = useMemo(() => {
    return data
      .filter((item) => selected.includes(item.category))
      .map((item) => item.icon);
  }, [selected]);

  if (isLoading) return null;

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className="w-[110px] h-[35px] inline-flex items-center justify-center gap-1 text-primary bg-surface cursor-pointer outline-none"
            aria-label="Update dimensions"
          >
            {selected.length > 0 ? (
              <div className={clsx(
                "flex gap-1 items-center",
                "text-primary bg-surface",
                "[&>*]:w-[20px] [&>*]:h-[20px]"
              )}>
                {selectedIcons}
              </div>
            ) : (
              <p className="font-serif font-bold">Custom</p>
            )}
            <ArrowIcon style={{ flexShrink: 0, height: '1.35rem', width: 'auto', marginBottom: '-2px' }} />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={clsx(
              "rounded-lg bg-surface",
              "shadow-[0_0_0_1px] shadow-neutral-200 dark:shadow-neutral-600",
              "will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade",
            )}
            sideOffset={5}
            collisionPadding={8}
        >
          <ScrollArea.Root className="p-2 w-full max-w-80 h-full max-h-96 flex flex-col overflow-hidden">
            <ScrollArea.Viewport className="w-full h-full rounded">
              <div className="flex flex-col gap-2.5">
                <p className="text-primary text-sm select-none">Select topics</p>
                <div className="flex gap-2 items-center flex-wrap">
                  {data.map((item, index) => (
                    <Option
                      key={index}
                      icon={item.icon}
                      label={item.category}
                      onClick={handleOptionClick}
                      selected={selected.includes(item.category)}
                    />
                  ))}
                </div>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out hover:bg-transparent data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-neutral-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-neutral-300 transition-colors duration-[160ms] ease-out hover:bg-neutral-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="flex-1 bg-neutral-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-neutral-950" />
          </ScrollArea.Root>
          <Popover.Close
            className="h-[25px] w-[25px] text-primary inline-flex items-center justify-center absolute top-[5px] right-[5px] rounded-full outline-none"
            aria-label="Close"
          >
            <CloseIcon />
          </Popover.Close>
          <Popover.Arrow className="fill-neutral-200 dark:fill-neutral-600" />
        </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default SectionSelect;