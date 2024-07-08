'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
export default function Profile() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <div className="px-2 py-1.5 rounded-lg hover:bg-accent">
          <TooltipTrigger>
            <Link href="/" className="flex justify-between ">
              <p className="font-bold text-xl drop-shadow-sm hover:drop-shadow-md">
                Æ{/* Alper Erdoğan */}
              </p>{' '}
              <div className="flex items-center justify-center mr-0.5">
                <div className="w-2 h-2 rounded-full bg-lime-400"></div>
                <div className="w-2 h-2  rounded-full bg-lime-200 absolute -z-10 blur-[4px]"></div>
              </div>
            </Link>

            <div className="flex gap-2 items-center justify-between">
              <p className="font-normal text-[16.5px] whitespace-nowrap drop-shadow-sm">
                software developer
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent
            className="border-2 shadow-none"
            side="bottom"
            alignOffset={-10}
            sideOffset={12}
            align="end"
          >
            <p className="font-semibold text-[.9rem] ">Open to work</p>
          </TooltipContent>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
}
