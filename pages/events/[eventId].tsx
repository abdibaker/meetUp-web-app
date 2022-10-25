import { useRouter } from 'next/router'
import EventContent from '../../components/event-detail/event-content';
import EventLogistic from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event was found</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic items={event} />
      <EventContent description={event.description} />
    </>
  )
}
export default EventDetailPage  