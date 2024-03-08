import Card from '@/components/Fragments/Card'
import Hero from '@/components/Fragments/Hero'
import { Pagination } from '@nextui-org/react'

export default function HomeView({ data, page, setPage }: any) {
  const rand = Math.floor(Math.random() * data?.results.length)
  return (
    <>
      <main className='container mt-[500px] min-h-[calc(100vh-64px)] py-6'>
        <Hero id={data?.results[rand].id} />
        <h1 className='mb-4 text-3xl font-bold  tracking-wide subpixel-antialiased'>
          Discover Movies
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
      </main>
    </>
  )
}
