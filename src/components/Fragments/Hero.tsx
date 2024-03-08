import dayjs from 'dayjs'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { calcTime } from '@/utils'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import { StarIcon } from '../Icons/StarIcon'

export default function Hero({ id = 0 }: { id: number }) {
  const { data } = useSWR(`movie/${id}`, fetcher)
  return (
    <div className='absolute left-0 right-0 top-0  w-full shadow-lg'>
      <div className='relative h-[500px] overflow-hidden'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt={data?.title}
          width={1500}
          height={1500}
          loading='lazy'
          radius='none'
          removeWrapper
          className=' h-full w-full object-cover object-top'
        />

        <div className='absolute bottom-0 left-0 right-0 z-20 w-full pb-10 pt-6'>
          <div className='absolute -bottom-10 -left-10 -right-10 -z-10 h-80 bg-black/60 blur-xl'></div>
          <div className='container subpixel-antialiased  '>
            <h1 className='text-2xl font-semibold uppercase tracking-wider text-base-100 md:text-3xl lg:text-5xl '>
              {data?.title} ({dayjs(data?.release_date).format('YYYY')})
            </h1>
            <div className='mt-3 flex flex-auto gap-x-4 font-light tracking-wide text-base-100'>
              <div className='flex flex-wrap gap-x-6 gap-y-2'>
                {data?.genres.map((genre: any) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
              <div className='flex-1 border-l-2 border-base-100 px-4'>
                Duration: {calcTime(data?.runtime)}
              </div>
            </div>
            <div className='mt-8 flex flex-wrap gap-y-3 md:justify-between'>
              <div className='flex gap-x-4'>
                <Button
                  href={`/movies/${data?.id}`}
                  as={Link}
                  color='primary'
                  variant='solid'
                  radius='sm'
                  size='lg'
                  className='w-36'
                >
                  VIEW INFO
                </Button>
                <button className='uppercase text-base-100 hover:text-secondary '>
                  + Add to List
                </button>
              </div>
              <div className='flex items-center text-base-100 antialiased  sm:w-full sm:justify-end md:w-auto '>
                <StarIcon size={16} className='text-yellow-500' />
                <p className='ms-2 text-sm font-bold  dark:text-white'>
                  {data?.vote_average.toFixed(2)}
                </p>
                <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400'></span>
                <a className='text-sm underline hover:no-underline dark:text-white'>
                  {data?.vote_count} reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
