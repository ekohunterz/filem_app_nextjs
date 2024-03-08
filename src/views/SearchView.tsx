import Card from '@/components/Fragments/Card'
import { Pagination } from '@nextui-org/react'

export default function SearchView({ data, page, setPage, query }: any) {
  return (
    <main className='min-h-[calc(100vh-64px)]'>
      {/* <div className='absolute -left-1 -right-1 -top-1 z-10 h-24 bg-black blur-sm'></div> */}
      <div className='container mt-24'>
        <h1 className='mb-4 text-3xl font-bold tracking-wide subpixel-antialiased'>
          Search Results for &quot;{query}&quot;
        </h1>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {(data.results || []).map((movie: any) => {
            return <Card key={movie.id} movie={movie} />
          })}
        </div>
        <div className='mt-6 flex w-full justify-center'>
          <Pagination
            showControls
            total={500}
            initialPage={page}
            page={page}
            onChange={setPage}
          />
        </div>
      </div>
    </main>
  )
}
