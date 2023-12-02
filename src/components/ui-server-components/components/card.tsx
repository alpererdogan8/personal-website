import { Card as SCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleIcon, StarIcon } from "lucide-react";
import Flag from "flag-color-for-languages";
import Link from "next/link";
import { MainCard } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Card({ title, description, image, url, createdAt, language, stars }: MainCard) {
  return (
    <Link href={url}>
      <SCard className="w-full transition-all border-2  hover:drop-shadow-xl dark:hover:drop-shadow dark:hover:border-purple-700 ">
        {image ? (
          <>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image objectFit="cover" src={image!} className="rounded-t-lg" alt="" fill />
            </AspectRatio>
          </>
        ) : (
          <></>
        )}
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="my-2"></CardTitle>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="line-clamp-3">{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            {language ? (
              <>
                <div className="flex items-center">
                  <CircleIcon
                    className="mr-1 h-3 w-3"
                    style={{
                      fill: Flag[`${language}`],
                      color: Flag[`${language}`],
                    }}
                  />
                  {language}
                </div>
              </>
            ) : null}
            {stars ? (
              <div className="flex items-center">
                <StarIcon className="mr-1 h-3 w-3" />
                {stars}
              </div>
            ) : null}
            <div>{format(new Date(createdAt!), "dd-MM-yyyy")}</div>
          </div>
        </CardContent>
      </SCard>
    </Link>
  );
}
