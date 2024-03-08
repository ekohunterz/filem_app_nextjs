import Image from 'next/image'
import Link from 'next/link'

export default function Card({ movie }: { movie: any }) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      key={movie.id}
      className='group relative h-96 overflow-hidden rounded-lg bg-accent shadow-md shadow-primary transition duration-300 hover:scale-105 hover:shadow-lg'
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={500}
        className='h-full object-cover'
        priority
      />

      <div className='absolute bottom-0 z-10 w-full bg-accent/20  p-4 text-center font-bold antialiased opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100'>
        <span className='font-semibold text-base-100'>{movie.title}</span>
      </div>
    </Link>
  )
}
