import { Card, CardFooter, Image, Button } from '@nextui-org/react'

export default function App({ cast }: any) {
  return (
    <Card isFooterBlurred radius='lg' className='border-none'>
      <Image
        alt='Woman listing to music'
        className='h-full w-full object-cover'
        removeWrapper
        height={200}
        src={
          cast?.profile_path
            ? `https://image.tmdb.org/t/p/w200/${cast?.profile_path}`
            : 'https://placehold.co/200x200?text=No+Image'
        }
        width={200}
      />
      <CardFooter className='absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] flex-col overflow-hidden rounded-large border-1 border-white/20 bg-black/30 py-1 shadow-small before:rounded-xl before:bg-accent/10'>
        <p className='font-bold text-base-100/80'>{cast?.name} </p>
        <p className='text-tiny text-base-100/80'>{cast?.character}</p>
      </CardFooter>
    </Card>
  )
}
