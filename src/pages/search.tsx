import fetcher from '@/lib/fetcher'
import SearchView from '@/views/SearchView'
import SkeletonView from '@/views/SkeletonView'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function SearchPage() {
  const { query } = useRouter()

  const { data, error, isLoading } = useSWR(
    `search/movie?query=${query.search}`,
    fetcher
  )

  return (
    <>
      {isLoading && <SkeletonView />}
      {error && <div>failed to load</div>}
      {data && data.results.length > 0 && (
        <SearchView data={data} query={query.search} />
      )}
      {data && data.results.length === 0 && (
        <div className='text-center'>No results found</div>
      )}
    </>
  )
}
