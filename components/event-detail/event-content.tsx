const EventContent = ({ description }: { description: string }) => {
  return (
    <div className='w-[80ch] mx-auto mt-8'>
      <p className='text-center text-xl'>{description}</p>
    </div>
  )
}
export default EventContent