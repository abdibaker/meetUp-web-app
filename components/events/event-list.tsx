import EventItem from './event-item';
import { IEvents } from '../../interfaces/events';

const EventList = ({ items }: { items: IEvents[] }) => {
  return (
    <ul className='grid place-content-center min-h-screen m-6'>
      {items.map((item: IEvents) => (
        <div key={item.id} className='mb-4'>
          <EventItem items={item} />
        </div>
      ))}
    </ul>
  )
}
export default EventList