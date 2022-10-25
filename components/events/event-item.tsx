import Image from 'next/image'
import { format } from 'date-fns'
import { IEvents } from '../../interfaces/events'
import { DateIcon } from '../icons/date-icon'
import Link from 'next/link'
import { ArrowRightIcon } from '../icons/arrow-right-icon'

const EventItem = ({ items }: { items: IEvents }) => {
  const { id, title, description, location, date, image, isFeatured } = items
  return (
    <li className="card md:card-side w-96 max-w-3xl md:w-auto bg-base-100 shadow-xl">
      <figure className="md:w-5/12"><Image src={'/' + image} alt={image} width={500} height={360} /></figure>
      <div className="card-body flex-shrink-0 justify-between p-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="card-title">{title}!</h2>
          <div className='flex gap-x-1 text-gray-500'>
            <DateIcon />
            <time className='font-bold'>{format(new Date(`${date}`), 'PPP')}</time>
          </div>
          <div className='flex gap-x-1 text-gray-600'>
            <DateIcon />
            <div className=' w-[20ch]'>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <Link href={`events/${id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore Event<span className='ml-2'><ArrowRightIcon /></span></button>
          </div>
        </Link>
      </div>
    </li>
  )
}
export default EventItem
