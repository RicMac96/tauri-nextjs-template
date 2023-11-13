'use client'

import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import { useGlobalContext } from '@/utils/context'

const linkClass = 'hover:bg-gray-600 hover:text-black rounded-full p-3'

export default function Header() {
  const { setFilter } = useGlobalContext()
  return (
    <div className="flex justify-between border-b-4 border-gray-500 px-5 py-2">
      <div className="flex items-center gap-5 text-xl">
        <Link href="/" passHref className="rounded-full hover:bg-gray-700/75">
          <Image
            className="h-12"
            src="favicon.ico"
            alt="EDPR"
            width="100"
            height="100"
          />
        </Link>
        <Link className={linkClass} href="/report" passHref>
          Add Report
        </Link>
        <Link className={linkClass} href="/procedure" passHref>
          Add Procedure
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="rounded-full text-center text-2xl text-black"
          placeholder="search"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
        {/* <FontAwesomeIcon
          className="h-7 text-[#33F420]"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          icon={faMagnifyingGlass}
          flip="horizontal"
        /> */}
        <Link href="/settings" passHref>
          <FontAwesomeIcon
            icon={faGear}
            className="h-7 text-gray-500 hover:text-gray-600"
          />
        </Link>
      </div>
    </div>
  )
}
