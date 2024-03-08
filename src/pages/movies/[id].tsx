import { fetchDetail } from '@/lib/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import DetailView from '@/views/DetailView'
import SkeletonView from '@/views/SkeletonView'

export default function DetailPage() {
  const { query } = useRouter()

  const { data, error, isLoading } = useSWR(`movie/${query.id}`, fetchDetail)

  return (
    <>
      {isLoading && <SkeletonView />}
      {error && <div>failed to load</div>}
      {data && <DetailView data={data} />}
    </>
  )
}
