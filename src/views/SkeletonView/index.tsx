import { Card, Skeleton } from '@nextui-org/react'

export default function SkeletonView({ isLoaded = false }) {
  return (
    <>
      <div className='absolute left-0 right-0 top-0  w-full'>
        <div className='relative h-[500px] overflow-hidden'>
          <Skeleton
            isLoaded={isLoaded}
            className='h-[500px] w-full shadow-md'
          ></Skeleton>
        </div>
        <main className='container mt-[500px] min-h-[calc(100vh-64px)] py-6'>
          <div className='grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                isLoaded={isLoaded}
                className='rounded-lg shadow-md'
                key={index}
              >
                <div className='h-96 rounded-lg bg-secondary'></div>
              </Skeleton>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
