import Image from 'next/image'
import { format } from 'date-fns'
import { IEvents } from '../../interfaces/events'
import { DateIcon } from '../icons/date-icon'
import Link from 'next/link'
import { ArrowRightIcon } from '../icons/arrow-right-icon'

const EventLogistic = ({ items }: { items: IEvents }) => {
  const { id, title, location, date, image } = items

  return (
    <div className="card md:card-side w-72 max-w-xl md:w-auto bg-base-300 shadow-xl -mt-12 sm:-mt-16 z-10 mx-auto">
      <figure className="pt-6 md:p-8 avatar">
        <div className='w-48 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2'>
          <Image src={'/' + image} alt={image} width={500} height={500} />
        </div>
      </figure>
      <div className="card-body flex-shrink-0 self-center">
        <div className='flex md:flex-col gap-x-1 text-gray-500'>
          <div>
            <DateIcon />
          </div>
          <time className='font-bold'>{format(new Date(`${date}`), 'PPP')}</time>
        </div>
        <div className='flex md:flex-col gap-x-1 text-gray-600'>
          <div>
            <DateIcon />
          </div>
          <div className='md:w-[20ch]'>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventLogistic