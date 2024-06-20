import { Card, Skeleton } from "@nextui-org/react"

export default function ProductsSectionSekeleton() {
  return (
    Array(6).fill(
      <Card className="w-full p-4 space-y-5" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-32 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="w-3/5 h-3 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    )
  )
}