import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingCard() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="w-full">
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1 w-full">
            <CardTitle>
              <Skeleton className="w-4/12 h-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-10/12 h-4 mt-2" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-[80px] h-4" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[35px] h-4" />
            </div>
            <div>
              <Skeleton className="w-[150px] h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1 w-full">
            <CardTitle>
              <Skeleton className="w-4/12 h-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-10/12 h-4 mt-2" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-[80px] h-4" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[35px] h-4" />
            </div>
            <div>
              <Skeleton className="w-[150px] h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1 w-full">
            <CardTitle>
              <Skeleton className="w-4/12 h-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-10/12 h-4 mt-2" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-[80px] h-4" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[35px] h-4" />
            </div>
            <div>
              <Skeleton className="w-[150px] h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1 w-full">
            <CardTitle>
              <Skeleton className="w-4/12 h-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-10/12 h-4 mt-2" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-[80px] h-4" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[35px] h-4" />
            </div>
            <div>
              <Skeleton className="w-[150px] h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex items-start gap-4 space-y-0">
          <div className="space-y-1 w-full">
            <CardTitle>
              <Skeleton className="w-4/12 h-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="w-10/12 h-4 mt-2" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-[80px] h-4" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[35px] h-4" />
            </div>
            <div>
              <Skeleton className="w-[150px] h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
