import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export default function Profile() {
  return (
    <Link href="/" className="flex flex-col">
      <p className="font-bold text-xl drop-shadow-sm hover:drop-shadow-md">Æ{/* Alper Erdoğan */}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex gap-2 items-center justify-between">
              <p className=" font-normal text-[16.5px] drop-shadow-sm">software developer</p>

              <div className="flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-lime-400"></div>
                <div className="w-2 h-2  rounded-full bg-lime-200 absolute -z-10 blur-[4px]"></div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            <p className="font-mono text-[2px] ">Open to work</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
}
