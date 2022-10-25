import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const EventPage = () => {
  const featuredEvents = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={featuredEvents}></EventList>
    </div>
  )
}
export default EventPage