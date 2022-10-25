const EventSummary = ({ title }: { title: string }) => {
  return (
    <div className='bg-gradient-to-tr from-green-600 to-green-800 h-48'>
      <h1 className='text-5xl text-center pt-8 text-gray-50 font-semibold'>{title}</h1>
    </div >
  )
}
export default EventSummary