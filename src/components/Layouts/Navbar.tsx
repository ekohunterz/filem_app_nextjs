import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react'
import { SearchIcon } from '../Icons/SearchIcon'
import { useRouter } from 'next/router'

export default function NavbarComponents() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { push } = useRouter()
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true)
    }
    return () => {
      window.onscroll = null
    }
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    push(`/search?search=${e.target[0].value}`)
  }

  return (
    <Navbar
      isBordered
      maxWidth='2xl'
      className={
        isScrolled
          ? 'border-0 bg-primary bg-opacity-90 duration-300'
          : 'border-0 bg-opacity-0 duration-500'
      }
      isBlurred={false}
    >
      <NavbarContent justify='start'>
        <Link href='/'>
          <NavbarBrand className='mr-4'>
            <h1 className='text-2xl font-bold uppercase text-base-100'>
              Movie APP
            </h1>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder='Type to search...'
            size='sm'
            startContent={<SearchIcon size={16} />}
            type='search'
          />
        </form>
      </NavbarContent>
    </Navbar>
  )
}
