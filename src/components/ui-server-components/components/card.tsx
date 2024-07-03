import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Card as SCard,
} from '@/components/ui/card';
import { MainCard } from '@/lib/types';
import { format } from 'date-fns';
import Flag from 'flag-color-for-languages';
import { CircleIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type FlagLanguage = keyof typeof Flag;
export default function Card({
  title,
  description,
  image,
  url,
  createdAt,
  language,
  stars,
}: MainCard) {
  return (
    <Link href={url}>
      <SCard className="w-full transition-all border-2  hover:drop-shadow-xl dark:hover:drop-shadow dark:hover:border-purple-700 ">
        {image ? (
          <>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                objectFit="cover"
                src={image!}
                className="rounded-t-lg"
                alt=""
                fill
              />
            </AspectRatio>
          </>
        ) : (
          <></>
        )}
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="my-2"></CardTitle>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="line-clamp-2 font-medium break-all text-pretty">
              {description}
            </CardDescription>
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
                      fill: Flag[language as FlagLanguage],
                      color: Flag[language as FlagLanguage],
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
            <div>{format(new Date(createdAt!), 'dd-MM-yyyy')}</div>
          </div>
        </CardContent>
      </SCard>
    </Link>
  );
}
