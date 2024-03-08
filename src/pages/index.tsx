import fetcher from '@/lib/fetcher'
import { useState } from 'react'
import useSWR from 'swr'
import HomeView from '@/views/HomeView'
import SkeletonView from '@/views/SkeletonView'

export default function Home() {
  const [page, setPage] = useState(1)

  const endpoint = `discover/movie?page=${page}`

  const { data, error, isLoading } = useSWR(endpoint, fetcher)

  return (
    <>
      {isLoading && <SkeletonView />}
      {error && <div className='text-center'>failed to load</div>}
      {data && <HomeView data={data} page={page} setPage={setPage} />}
    </>
  )
}
