import { StarIcon } from '@/components/Icons/StarIcon'
import { calcTime } from '@/utils'
import { Image } from '@nextui-org/react'
import dayjs from 'dayjs'
import CastsCard from '@/components/Fragments/CastsCard'

export default function DetailView({ data }: any) {
  return (
    <main className='min-h-[calc(100vh-64px)]'>
      {data && (
        <div className='absolute left-0 right-0 top-0 z-10 w-full'>
          <div className='relative '>
            <Image
              src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
              alt={data?.title}
              width={1500}
              height={1500}
              loading='lazy'
              radius='none'
              removeWrapper
              className='h-[500px] w-full object-cover object-top'
            />
            <div className='absolute left-0 right-0 top-20 z-10'>
              <div className='container rounded-sm bg-black/60 py-6 backdrop-blur-sm'>
                <div className='flex flex-wrap space-x-6'>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                    width={500}
                    height={500}
                    alt={data?.title}
                    className='h-full object-cover object-top md:w-48'
                  />
                  <div className='mt-3 flex flex-1 flex-col'>
                    <div className='flex flex-wrap justify-between gap-2'>
                      <div>
                        <h1 className='text-3xl font-bold text-base-100'>
                          {data?.title}
                        </h1>
                        <div className='mt-2 flex flex-col  gap-4 break-all md:flex-row md:items-center'>
                          <div className='text-base-100'>
                            {dayjs(data?.release_date).format('D/MM/YYYY')}
                          </div>
                          <span className='mx-1.5 hidden h-1 w-1 rounded-full bg-base-100 md:flex '></span>
                          <div className=' flex flex-wrap text-base-100'>
                            {data?.genres
                              .map((genre: any) => genre.name)
                              .join(', ')}
                          </div>
                          <span className='mx-1.5 hidden h-1 w-1 rounded-full bg-base-100 md:flex '></span>
                          <div className='text-base-100'>
                            {calcTime(data?.runtime)}
                          </div>
                        </div>
                      </div>

                      <div className='flex flex-wrap items-center space-x-2 text-base-100  md:flex-col'>
                        <div className='flex items-center gap-2'>
                          <StarIcon size={20} color='orange' />
                          <span>{data?.vote_average.toFixed(2)}</span>
                        </div>
                        <span className='text-sm leading-relaxed'>
                          ({data?.vote_count} reviews)
                        </span>
                      </div>
                    </div>

                    <h3 className='mt-6 text-xl font-bold text-base-100'>
                      Overview
                    </h3>
                    <p className=' text-base-100'>{data?.overview}</p>

                    <div className='mt-6 flex justify-between text-base-100 md:w-1/2'>
                      <div>
                        <h3 className='text-xl font-bold '> Director</h3>
                        <p className=''>
                          {
                            data?.credits?.crew.filter(
                              (c: any) => c.job === 'Director'
                            )[0]?.name
                          }
                        </p>
                      </div>

                      <div>
                        <h3 className='text-xl font-bold '> Producer</h3>
                        <p className=''>
                          {
                            data?.credits?.crew.filter(
                              (c: any) => c.job === 'Producer'
                            )[0]?.name
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container mt-28'>
                <h1 className='mb-4 text-center text-3xl font-bold'>Casts</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-6'>
                  {data?.credits?.cast &&
                    data?.credits?.cast.map((cast: any) => (
                      <CastsCard key={cast.id} cast={cast} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
