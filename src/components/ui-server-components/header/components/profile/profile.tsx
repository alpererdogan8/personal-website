import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <Link href="/" className="flex mt-5  flex-col">
        <p className="font-bold text-xl drop-shadow-sm hover:drop-shadow-md">Æ{/* Alper Erdoğan */}</p>
      </Link>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <div className="  flex gap-2 items-center justify-between">
              <p className=" font-normal text-[16.5px] whitespace-nowrap drop-shadow-sm">software developer</p>

              <div className="flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-lime-400"></div>
                <div className="w-2 h-2  rounded-full bg-lime-200 absolute -z-10 blur-[4px]"></div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            <p className="font-mono text-[.9rem] ">Open to work</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
